import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthPayload, AuthTypes } from './AuthTypes';
import {
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
} from '../../../services/authServices';

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
    return rejectWithValue(error.message || 'Sigup failed');
  }
});

// logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await signOutUser();
  return null;
});
