import { Signup } from '@/reducers/authSlice';
import { useAppDispatch } from '@/reducers/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
        .string()
        .required('user name or  number is required.'),
    email: yup
        .string()
        .required('Email is required.')
        .email('Email is invalid.'),
    phone: yup
        .string()
        .required('Phone number is required.')
        .matches(/^[0-9]+$/, 'Phone number is invalid.')
        .max(10, 'Phone number must be at most 10 characters.'),
    password: yup
        .string()
        .required('Password is required.')
        .min(6, 'Password must be at least 6 characters.'),
});

function useSignUp() {
    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
        },
    });

    const onSubmit = (data: any) => {
        dispatch(Signup(data));
    };

    return {
        control,
        errors,
        handleSubmit,
        onSubmit,
    };
}

export default useSignUp;
