import { useFormContext, type FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useGetUsers } from './useGetUsers';

export type InputsLog = {
  email: string;
  password: string;
};

export function useLogin() {
  const { handleSubmit, reset } = useFormContext();
  const [error, setError] = useState('');
  const { users } = useGetUsers();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const findUser = !!users && users.find(user => user.email === data.email);
    if (findUser) {
      if (findUser?.password === data.password) {
        localStorage.setItem('token', btoa(`${data.email}:${data.password}`));
        setError('');
        navigate('/profile');
        reset();
      } else setError('Неверный пароль. Проверьте заполнение данных.');
    } else
      setError(
        `Пользователя с почтой ${data.email} не существует. Проверьте заполнение данных.`,
      );
  };

  return { onSubmit: handleSubmit(onSubmit), error };
}
