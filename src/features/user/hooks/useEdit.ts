import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useUpdateUserMutation } from '../userApi';
import { Inputs } from '../../auth/types';
import { useGetUsers } from '../../auth/hooks/useGetUsers';
import { IUser } from '../../../hooks/types/IUsersType';

const setAvatar = (userFile: File, userEmail: string) => {
  const fileReader = new FileReader();
  const avatars = localStorage.getItem('userAvatars') || '';

  fileReader.onload = () => {
    if (fileReader.result) {
      if (!avatars) {
        const userAvatars = { [userEmail]: fileReader.result };
        localStorage.setItem('userAvatars', JSON.stringify(userAvatars));
      }
      const userAvatars = { ...JSON.parse(avatars) };
      userAvatars[userEmail] = fileReader.result;
      localStorage.setItem('userAvatars', JSON.stringify(userAvatars));
    }
  };
  fileReader.readAsDataURL(userFile);
};

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
    const userEmail = data.email;
    const userFile = data.avatar[0];
    const findUser = users && users.find(user => user.email === userEmail);
    if (findUser && findUser.id !== user.id) {
      setError(`Пользователь с почтой ${userEmail} уже сущестует.`);
      return;
    }
    localStorage.setItem('token', btoa(`${userEmail}:${data.password}`));

    userFile && setAvatar(userFile, userEmail);

    await updateUser({
      ...data,
      id: user.id,
      tel: data.tel.replace(/\s+/g, '').toString()
    }).unwrap();

    isError && setError('Ошибка на сервере. Повторите попытку еще раз');
    navigate('/profile');
    reset();
  };

  return { onSubmit: handleSubmit(onSubmit), error };
}

