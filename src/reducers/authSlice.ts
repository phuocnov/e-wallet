import type { AppDispatch } from './store';
import type { LoginAPIPayload } from '@/apis/auth';

import { createSlice } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';

import { CurrentUserAPI, LoginAPI } from '@/apis/auth';
import ReactNativeBiometrics from 'react-native-biometrics';
import { Alert } from 'react-native';

export type Usertype = {
  email: string;
  id: number;
  username: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: Usertype;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFail: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;

export const { startLoading, loginSuccess, loginFail, logOut } =
  authSlice.actions;

export const Login =
  (payload: LoginAPIPayload) => async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    try {
      const data = await LoginAPI(payload);
      const store = new MMKV();
      store.set('token', data.data.token);

      const res = await CurrentUserAPI();
      dispatch(loginSuccess(res.data));
    } catch {
      dispatch(loginFail());
    }
  };

export const LoginWithBiometric = async (dispatch: AppDispatch) => {
  const store = new MMKV();
  const rnBiometrics = new ReactNativeBiometrics();

  dispatch(startLoading());
  if (!store.getAllKeys().includes('UserID')) {
    dispatch(loginFail());
    return;
  }
  const payload = `${store.getString('UserID')}`;
  const { success, signature } = await rnBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload,
  });
  if (!success) {
    Alert.alert("Something go wrong")
  };
};

export const CheckAuth = async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  try {
    const store = new MMKV();
    if (store.getAllKeys().includes('token')) {
      dispatch(logOut());
      return;
    }
    const user = await CurrentUserAPI();
    dispatch(loginSuccess(user));
  } catch {
    dispatch(loginFail());
  }
};

export const LogOut = async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  dispatch(logOut());
};
