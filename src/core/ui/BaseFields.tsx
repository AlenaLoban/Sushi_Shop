import React from 'react';
import style from '../../features/auth/components/scss/auth.module.scss';
import InputWrapper from '../ui/input/InputWrapper';
import InputElement from '../ui/input/InputElement';
import InputError from '../ui/input/InputError';

const BaseFields: React.FC = () => {
  return (
    <div className={style.baseFields}>
      <InputWrapper label="Имя" name="name">
        <InputElement type="text" name="name" />
        <InputError name="name" />
      </InputWrapper>
      <InputWrapper label="Почта" name="email">
        <InputElement type="email" name="email" placeholder="email@gmail.com" />
        <InputError name="email" />
      </InputWrapper>
      <InputWrapper label="Телефон" name="tel">
        <InputElement type="tel" name="tel" placeholder="+375(29)2222222" />
        <InputError name="tel" />
      </InputWrapper>
      <InputWrapper label="Пароль" name="password">
        <InputElement type="password" name="password" />
        <InputError name="password" />
      </InputWrapper>
      <InputWrapper label="Подтвердите пароль" name="conf_password">
        <InputElement type="password" name="conf_password" />
        <InputError name="conf_password" />
      </InputWrapper>
    </div>
  );
};
export default BaseFields;
