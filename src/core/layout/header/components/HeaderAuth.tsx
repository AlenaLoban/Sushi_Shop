import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import style from '../scss/header.module.scss';
import UserAvatar from '../../../../features/user/components/UserAvatar';

const HeaderAuth: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/');
  };
  const isToken = localStorage.getItem('token');

  return (
    <div className={style.box__auth}>
      <>
        {isToken ? (
          <Link to={'/profile'} className={style.box__auth__profile}>
            <UserAvatar />
          </Link>
        ) : (
          <Link to={'/login'}>Войти</Link>
        )}
      </>
      <p>|</p>
      <>
        {isToken ? (
          <p onClick={handleClick}>Выйти</p>
        ) : (
          <Link to={'/register'}>Регистрация</Link>
        )}
      </>
    </div>
  );
};
export default HeaderAuth;
