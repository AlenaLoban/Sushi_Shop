import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useUpdateUserMutation } from '../userApi';
import { Inputs } from '../../auth/components/types';
import { useGetUsers } from '../../auth/hooks/useGetUsers';
import { IUser } from '../../../hooks/types/IUsersType';

export function useEdit(user: IUser) {
  const [error, setError] = useState<string>();
  const { handleSubmit, reset } = useFormContext<Inputs>();
  const { users } = useGetUsers();
  const [updateUser, { isError }] = useUpdateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({
    conf_password,
    ...data
  }) => {
    const findUser = !!users && users.find(user => user.email === data.email);
    if (findUser && findUser.id !== user.id) {
      setError(`Пользователь с почтой ${data.email} уже сущестует.`);
      return;
    }
    localStorage.setItem('token', btoa(`${data.email}:${data.password}`));

    await updateUser({
      ...data,
      id: user.id,
      tel: data.tel.replace(/\s+/g, '').toString(),
      avatar: data?.avatar[0]
        ? URL.createObjectURL(data.avatar[0])
        : user.avatar,
    }).unwrap();

    isError && setError('Ошибка на сервере. Повторите попытку еще раз');
    navigate('/profile');
    reset();
  };

  return { onSubmit: handleSubmit(onSubmit), error };
}
