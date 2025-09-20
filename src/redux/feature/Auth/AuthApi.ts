import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthPayload, AuthTypes } from './AuthTypes';
import {
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
  googleLogin,
} from '../../../services/authServices';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// login user with firese
export const loginUser = createAsyncThunk<
  AuthTypes,
  AuthPayload,
  { rejectValue: string }
>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await signInWithEmail(email, password);

    return {
      uid: response.user.uid,
      email: response.user.email,
    };
  } catch (error: any) {
    return rejectWithValue(error?.message || 'Login failed');
  }
});

// Singup user with firebase
export const signupUser = createAsyncThunk<
  AuthTypes,
  AuthPayload,
  { rejectValue: string }
>('auth/signup', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await signUpWithEmail(email, password);
    return {
      uid: response.user.uid,
      email: response.user.email,
    };
  } catch (error: any) {
    return rejectWithValue(error.message || 'Sigup failed rh');
  }
});

// logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await signOutUser();
  await GoogleSignin.signOut();
  return null;
});

// Google Login
export const googleLoginUser = createAsyncThunk(
  'auth/googleLoginUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await googleLogin();
      console.log("user",user)
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Google login failed');
    }
  },
);
