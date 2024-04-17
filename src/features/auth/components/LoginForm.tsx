import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../core/ui/Button';
import style from './scss/auth.module.scss';
import InputBox from './InputBox';
import InputPassword from './InputPassword';
import { checkUser } from '../utils/authValidation';
import { useGetUsersQuery } from '../../user/userApi';
import { useState } from 'react';
import FormError from './FormError';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export type InputsLog = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required('Поле обязательно для заполнения').trim(),
    password: yup.string().trim().required('Поле обязательно для заполнения'),
  })
  .required();

const LoginForm = () => {
  const [error, setError] = useState('');
  const getUser = useGetUsersQuery('');
  const users = getUser.data || [];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<InputsLog>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<InputsLog> = data => {
    const { error, status } = checkUser(data, users);
    if (status) {
      setError('');
      navigate('/profile', { replace: true, state: { email: data.email } });
      reset();
    } else {
      setError(error);
    }
  };
  return (
    <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <InputBox label="Почта" {...register('email')} />
      <InputPassword label="Пароль" {...register('password')} />
      {error && <FormError errorMessage={error} />}

      <Button className={style.submit} type="submit" disabled={!isValid}>
        Войти
      </Button>
    </form>
  );
};
export default LoginForm;
