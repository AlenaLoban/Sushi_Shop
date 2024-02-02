import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import cn from "classnames";
import style from "./css/header.module.scss";
import { IoMenu, IoClose } from "react-icons/io5";

const HeaderMenu: React.FC = () => {
  const [burger, setBurger] = useState(false);
  const setActive = ({ isActive }: { isActive: Boolean }) => ({
    color: isActive ? "gray" : "",
  });

  return (
    <>
      <div className={style.menulist}>
        <ul
          className={cn(
            style.header__menu,
            burger && style.header__menu_active
          )}
          onClick={() => setBurger(!burger)}
        >
          <li>
            <NavLink to="/" style={setActive}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" style={setActive}>
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" style={setActive}>
              Корзина
            </NavLink>
          </li>
        </ul>
      </div>
      <div onClick={() => setBurger(!burger)} className={style.burger}>
        {burger ? (
          <IoClose className={style.burger_close} size={30} color="white" />
        ) : (
          <IoMenu className={style.burger_open} size={30} color="white" />
        )}
      </div>
    </>
  );
};
export default HeaderMenu;
