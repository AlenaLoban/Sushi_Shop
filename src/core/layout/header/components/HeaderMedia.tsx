import { FaInstagram, FaTelegram, FaFacebookF } from 'react-icons/fa6';
import style from '../scss/header.module.scss';
import React from 'react';

const HeaderMedia: React.FC = () => {
  return (
    <ul className={style.box__socialMedia}>
      <li>
        <FaInstagram size={20} />
      </li>
      <li>
        <FaTelegram size={20} />
      </li>
      <li>
        <FaFacebookF size={20} />
      </li>
    </ul>
  );
};
export default HeaderMedia;
