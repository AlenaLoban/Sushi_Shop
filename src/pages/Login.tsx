import React from 'react';
import style from '../core/scss/index.module.scss';
import LoginForm from '../features/auth/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className={style.loginPage}>
      <h1>Вход</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
