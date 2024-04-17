import React, { useEffect, useState } from 'react';
import style from './scss/auth.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../core/ui/Button';
import InputBox from './InputBox';
import { Inputs } from './types';
import InputPassword from './InputPassword';
import { createRegUser } from '../../auth/utils/authValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
} from '../../user/userApi';
import { IUser } from '../../../hooks/types/IUsersType';
import 'yup-phone-lite';
import { useNavigate } from 'react-router-dom';
import FormError from './FormError';
import { schema } from './schema';
import cn from 'classnames';

type IProps = {
  user?: IUser;
  setPreAvatar?: (value: string) => void;
};

const RegisterForm: React.FC<IProps> = ({ user, setPreAvatar }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const getUser = useGetUsersQuery('');
  const users = getUser.data || [];
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,

    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: `${user ? user.name : ''}`,
      email: `${user ? user.email : ''}`,
      tel: `${user ? user.tel : ''}`,
      password: `${user ? user.password : ''}`,
      conf_password: `${user ? user.password : ''}`,
    },
    mode: 'onChange',
  });
  const watchAvatar = watch('avatar');
  const prewAvatar = getValues('avatar');

   useEffect(() => {
    if (prewAvatar && prewAvatar[0] && setPreAvatar)
      setPreAvatar(URL.createObjectURL(prewAvatar[0]));
  }, [watchAvatar, setPreAvatar, prewAvatar]);

  const onSubmit: SubmitHandler<Inputs> = async ({
    conf_password,
    ...data
  }) => {
    const userId = user?.id || '';
    if (createRegUser(data, users, userId)) {
      setError(false);
      const newUser = {
        ...data,
        tel: data.tel.replace(/\s+/g, ''),
        id: Date.now().toString(),
      };

      {
        user
          ? await updateUser({
              ...newUser,
              id: user.id,
              avatar: data.avatar[0]
                ? URL.createObjectURL(data.avatar[0])
                : user.avatar,
            }).unwrap()
          : await addUser({ ...newUser }).unwrap();
      }
      navigate('/profile');
      reset();
    } else setError(true);
  };

  return (
    <form className={style.registerForm} onSubmit={handleSubmit(onSubmit)}>
      {user && (
        <div
          className={cn(style.registerForm__avatar, !user ? style.hidden : '')}
        >
          <label htmlFor="avatar">Загрузить фото + </label>
          <InputBox
            id="avatar"
            {...register('avatar')}
            className={style.hidden}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
          />
        </div>
      )}
      <InputBox
        id="name"
        errorMessage={errors.name?.message}
        type="text"
        label="Имя"
        {...register('name')}
      />
      <InputBox
        id="email"
        errorMessage={errors.email?.message}
        {...register('email')}
        label="Почта"
        type="email"
        placeholder="email@gmail.com"
      />
      <InputBox
        id="tel"
        errorMessage={errors.tel?.message}
        {...register('tel')}
        type="tel"
        label="Телефон"
        placeholder="+375(29)2222222"
      />
      <div className={cn(user ? style.hidden : '')}>
        <div style={{ paddingBottom: '30px' }}>
          <InputPassword
            id="password"
            errorMessage={errors.password?.message}
            type="password"
            {...register('password')}
            label="Пароль"
          />
        </div>
        <div>
          <InputPassword
            id="conf_password"
            errorMessage={errors.conf_password?.message}
            {...register('conf_password')}
            type="password"
            label="Подтвердите пароль"
          />
        </div>
      </div>
      {error && (
        <FormError
          errorMessage={
            'Ошибка регистрации. Пользователь с такой электронной почтой уже сущестует.'
          }
        />
      )}
      <Button className={style.submit} disabled={!isValid} type="submit">
        {user ? 'Сохранить' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
};
export default RegisterForm;
