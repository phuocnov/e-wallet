import { Login } from '@/reducers/authSlice';
import { useAppDispatch } from '@/reducers/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  usernameOrPhoneNumber: yup
    .string()
    .required('user name or  number is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.'),
});

function useLogin() {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      usernameOrPhoneNumber: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    dispatch(Login(data));
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}

export default useLogin;
