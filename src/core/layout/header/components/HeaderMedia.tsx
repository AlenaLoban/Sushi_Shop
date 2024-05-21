import { FaInstagram, FaTelegram, FaFacebookF } from 'react-icons/fa6';
import style from '../scss/header.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMedia: React.FC = () => {
  return (
    <ul className={style.box__socialMedia}>

      <Link to="https://www.instagram.com/">
        <li>
          <FaInstagram size={20} />
        </li>
      </Link>

      <Link to="https://www.telegram.org/">
        <li>
          <FaTelegram size={20} />
        </li>
      </Link>

      <Link to="https://www.facebook.com/">
        <li>
          <FaFacebookF size={20} />
        </li>
      </Link>
      
    </ul>
  );
};
export default HeaderMedia;
