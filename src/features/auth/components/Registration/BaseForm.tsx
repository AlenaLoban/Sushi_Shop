import { useFormContext } from 'react-hook-form';
import React from 'react';
import InputBox from '../InputBox';
import InputPassword from '../InputPassword';

const BaseForm: React.FC = () => {
  const { register, formState } = useFormContext();
  const errors = formState.errors;
  return (
    <>
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
      <div>
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
    </>
  );
};
export default BaseForm;
