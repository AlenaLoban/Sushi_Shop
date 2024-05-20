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
    const findUser = users && users.find(user => user.email === data.email);

    if (!findUser || findUser?.password !== data.password) {
      setError('Проверьте заполнение данных');
      return;
    }

    localStorage.setItem('token', btoa(`${data.email}:${data.password}`));
    setError('');
    navigate('/profile');
    reset();
  };

  return { onSubmit: handleSubmit(onSubmit), error };
}
