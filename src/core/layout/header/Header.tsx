import { Link } from "react-router-dom";
import React from "react";
import style from "./css/header.module.scss";
import { FaInstagram, FaTelegram, FaFacebookF } from "react-icons/fa6";
import cn from "classnames";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import HeaderCart from "./HeaderCart";
import HeaderCallInfo from "./HeaderCallInfo";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC = () => {
  const isScrollDown = useScrollDirection();

  return (
    <header className={cn(isScrollDown ? style.scroll_down : style.scroll_up)}>
      <div className={cn(style.header, style.container)}>
        <div className={style.header__top}>
          <HeaderMenu />

          <div>
            <ul className={style.header__top__socialMedia}>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTelegram />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
        <div className={style.header__bottom}>
          <HeaderCallInfo />
          <HeaderCart />
        </div>
        <Link to="/">
          <div
            style={{ backgroundImage: "url(logo.jpg)" }}
            className={style.header__logo}
          ></div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
