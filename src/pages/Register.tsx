import React from 'react';
import RegisterForm from '../features/auth/components/Registration/RegisterForm';
import style from '../core/scss/index.module.scss';
import cn from 'classnames';

const RegisterPage: React.FC = () => {
  return (
    <div className={cn(style.registerPage, style.container)}>
      <h1>Регистрация</h1>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
