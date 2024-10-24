import type { AxiosResponse } from 'axios';

import axiosInstance from './axios';

export type LoginAPIPayload = {
  password: string;
  phonenumber: string;
};

export const CurrentUserAPI = async () => {
  return {
    user: {
      id: 1,
      username: 'admin',
      email: '',
    },
  };
};

export const LoginAPI = async (payload: LoginAPIPayload) => {
  // const response: AxiosResponse = await axiosInstance.post(
  //   '/auth/login',
  //   payload,
  // );
  // return response.data;
  return {
    accessToken: '123',
  };
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
