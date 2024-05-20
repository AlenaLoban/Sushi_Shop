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
        <InputError>
          <>{err?.name?.message}</>
        </InputError>
      </InputWrapper>

      <InputWrapper label="Почта" name="email">
        <InputElement
          type="email"
          name="email"
          placeholder="email@gmail.com"
          register={register}
          error={err?.email}
        />
        <InputError>
          <>{err?.email?.message}</>
        </InputError>
      </InputWrapper>

      <InputWrapper label="Телефон" name="tel">
        <InputElement
          type="tel"
          name="tel"
          placeholder="+375(29)2222222"
          register={register}
          error={err?.tel}
        />
        <InputError>
          <>{err?.tel?.message}</>
        </InputError>
      </InputWrapper>

      <InputWrapper label="Пароль" name="password">
        <InputElement
          type="password"
          name="password"
          register={register}
          error={err?.password}
        />
        <InputError>
          <>{err?.password?.message}</>
        </InputError>
      </InputWrapper>

      <InputWrapper label="Подтвердите пароль" name="conf_password">
        <InputElement
          type="password"
          name="conf_password"
          register={register}
          error={err?.conf_password}
        />
        <InputError>
          <>{err?.conf_password?.message}</>
        </InputError>
      </InputWrapper>
    </div>
  );
};
export default BaseFields;
