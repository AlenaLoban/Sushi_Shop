import React from 'react';
import style from '../core/scss/index.module.scss';
import LoginForm from '../features/auth/components/Login/LoginForm';
import cn from 'classnames';

const LoginPage: React.FC = () => {
  return (
    <div className={cn(style.loginPage, style.container)}>
      <h1>Вход</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
