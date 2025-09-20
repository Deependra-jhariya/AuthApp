import { createSlice } from '@reduxjs/toolkit';
import { AuthPayload, AuthTypes } from './AuthTypes';
import { googleLoginUser, loginUser, logoutUser, signupUser } from './AuthApi';

interface authState {
  user: any;
  loading: boolean;
  error: null | string;
}

const initialState: authState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: state => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder

      // Login user
      .addCase(loginUser.pending, state => {
        (state.loading = true), (state.error = null);
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      //   signup User
      .addCase(signupUser.pending, state => {
        (state.loading = true), (state.error = null);
      })

      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.payload || 'SignUp failed');
      })

      // Logout
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
      })

      // Google Login
      .addCase(googleLoginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setUser, setLoading, logout } = userSlice.actions;
export default userSlice.reducer;
