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
    if (!fileReader.result) {
      return;
    }

    localStorage.setItem(
      'userAvatars',
      JSON.stringify({
        ...(avatars ? JSON.parse(avatars) : {}),
        [userEmail]: fileReader.result,
      }),
    );
  };
  fileReader.readAsDataURL(userFile);
};

export function useEdit(user: IUser) {
  const [error, setError] = useState<string>();
  const { handleSubmit, reset } = useFormContext<Inputs>();
  const { users } = useGetUsers();
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({
    conf_password,
    avatar,
    ...data
  }) => {
    const userEmail = data.email;
    const userFile = avatar && avatar[0];
    const findUser = users && users.find(user => user.email === userEmail);

    if (findUser && findUser.id !== user.id) {
      setError(`Пользователь с указанной почтой уже сущестует.`);
      return;
    }
    localStorage.setItem('token', btoa(`${userEmail}:${data.password}`));

    if (userFile) setAvatar(userFile, userEmail);

    try {
      await updateUser({
        ...data,
        id: user.id,
        tel: data.tel.replace(/\s+/g, '').toString(),
      }).unwrap();
      navigate('/profile');
      reset();
    } catch {
      setError('Ошибка на сервере. Повторите попытку еще раз');
    }
  };

  return { onSubmit: handleSubmit(onSubmit), error };
}
