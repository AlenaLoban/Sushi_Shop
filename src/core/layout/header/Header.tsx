import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import style from './scss/header.module.scss';
import cn from 'classnames';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import HeaderCart from './components/HeaderCart';
import HeaderCallInfo from './components/HeaderCallInfo';
import { IoMenu, IoClose } from 'react-icons/io5';
import HeaderAuth from './components/HeaderAuth';
import HeaderMenu from './components/HeaderMenu';
import HeaderMedia from './components/HeaderMedia';
import logo from '/logo.png';

const Header: React.FC = () => {
  const currentPath = useLocation().pathname;
  const isScrollDown = useScrollDirection(currentPath);
  const [burger, setBurger] = useState(false);

  return (
    <header className={cn(isScrollDown ? style.scroll_down : style.scroll_up)}>
      <div
        className={cn(
          style.header,
          style.container,
          currentPath === '/' && !burger && style.header__bg,
        )}
      >
        <div
          className={cn(style.header__top, burger && style.header__top__burger)}
          onClick={() => setBurger(false)}
        >
          <HeaderMenu burger={burger} />
          <div className={cn(style.header__top__box, style.box)}>
            <HeaderMedia />
            <HeaderAuth />
          </div>
        </div>
        <div className={style.header__bottom}>
          <HeaderCallInfo />
          <HeaderCart />
        </div>
      </div>
      <Link to="/">
        <img className={style.header__logo} src={logo} alt="" />
      </Link>
      <div onClick={() => setBurger(!burger)} className={style.burger}>
        {burger ? (
          <IoClose className={style.burger_close} size={30} />
        ) : (
          <IoMenu className={style.burger_open} size={30} />
        )}
      </div>
    </header>
  );
};
export default Header;
