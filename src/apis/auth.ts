import type { AxiosResponse } from 'axios';

import axiosInstance from './axios';

export type LoginAPIPayload = {
  password: string;
  usernameOrPhoneNumber: string;
};

export const CurrentUserAPI = async () => {
  const response: AxiosResponse = await axiosInstance.get('/users/profile');
  return response.data;
};

export const LoginAPI = async (payload: LoginAPIPayload) => {
  const response: AxiosResponse = await axiosInstance.post(
    '/users/auth/login',
    payload,
  );
  return response.data;
};

export const SignupAPI = async (payload: LoginAPIPayload) => {
  const response: AxiosResponse = await axiosInstance.post(
    '/auth/signup',
    payload,
  );

  if (response.status !== 200) {
    const error = new Error('Signup failed');
    (error as any).statusCode = 401;
    throw error;
  }

  return response.data;
};
