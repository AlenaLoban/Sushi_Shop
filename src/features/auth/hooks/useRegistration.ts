import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAddUserMutation } from '../../user/userApi';
import { Inputs } from '../types';
import { useGetUsers } from './useGetUsers';

export function useRegistration() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { handleSubmit, reset } = useFormContext<Inputs>();
  const { users } = useGetUsers();
  const [addUser] = useAddUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async ({
    conf_password,
    ...data
  }) => {
   
    const findUser = !!users && users.find(user => user.email === data.email);

    if (findUser) {
      setError(`Пользователь с указанной почтой уже сущестует.`);
      return;
    }

    localStorage.setItem('token', btoa(`${data.email}:${data.password}`));

    const newUser = {
      ...data,
      tel: data.tel.replace(/\s+/g, '').toString(),
      id: Date.now().toString(),
    };

    try {
      await addUser({ ...newUser }).unwrap();
      navigate('/profile');
      reset();
    } catch {
      setError('Ошибка на сервере. Повторите попытку еще раз');
    }
  };
  return { onSubmit: handleSubmit(onSubmit), error };
}
