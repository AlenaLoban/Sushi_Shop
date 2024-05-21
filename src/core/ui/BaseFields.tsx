import React from 'react';
import style from '../../features/auth/components/scss/auth.module.scss';
import InputWrapper from '../ui/input/InputWrapper';
import InputElement from '../ui/input/InputElement';
import InputError from '../ui/input/InputError';
import { useFormContext } from 'react-hook-form';

const BaseFields: React.FC = () => {
  const { register, formState } = useFormContext();
  const err = formState.errors;

  return (
    <div className={style.baseFields}>
      <InputWrapper label="Имя" name="name">
        <InputElement
          type="text"
          name="name"
          register={register}
          error={err?.name}
        />
        {err?.name?.message && (
          <InputError>{err.name.message as string}</InputError>
        )}
      </InputWrapper>

      <InputWrapper label="Почта" name="email">
        <InputElement
          type="email"
          name="email"
          placeholder="email@gmail.com"
          register={register}
          error={err?.email}
        />
        {err?.email?.message && (
          <InputError>{err.email.message as string}</InputError>
        )}
      </InputWrapper>

      <InputWrapper label="Телефон" name="tel">
        <InputElement
          type="tel"
          name="tel"
          placeholder="+375(29)2222222"
          register={register}
          error={err?.tel}
        />
        {err?.tel?.message && (
          <InputError>{err.tel.message as string}</InputError>
        )}
      </InputWrapper>

      <InputWrapper label="Пароль" name="password">
        <InputElement
          type="password"
          name="password"
          register={register}
          error={err?.password}
        />
        {err?.password?.message && (
          <InputError>{err.password.message as string}</InputError>
        )}
      </InputWrapper>

      <InputWrapper label="Подтвердите пароль" name="conf_password">
        <InputElement
          type="password"
          name="conf_password"
          register={register}
          error={err?.conf_password}
        />
        {err?.conf_password?.message && (
          <InputError>{err.conf_password.message as string}</InputError>
        )}
      </InputWrapper>
    </div>
  );
};
export default BaseFields;
