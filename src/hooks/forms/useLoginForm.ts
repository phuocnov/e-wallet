import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  emailOrPhonenumber: yup
    .string()
    .required('Email or phone number is required.')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.'),
});

function useLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      emailOrPhonenumber: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}

export default useLogin;
