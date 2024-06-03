import React from 'react';
import {WrapperRegisterForm} from '../features/auth';
import style from '../core/scss/index.module.scss';
import cn from 'classnames';

const RegisterPage: React.FC = () => {
  return (
    <div className={cn(style.registerPage, style.container)}>
      <h1>Регистрация</h1>
      <WrapperRegisterForm />
    </div>
  );
};
export default RegisterPage;
