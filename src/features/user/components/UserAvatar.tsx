import style from '../scss/user.module.scss';
import React from 'react';
import userAv from '/userAvatar.png';
import { useGetAvatar } from '../hooks/useGetAvatar';

type IProps = {
  preAvatar?: string;
};

const UserAvatar: React.FC<IProps> = ({ preAvatar }) => {
   const {userAvatar} = useGetAvatar()

  return (
    <div className={style.avatar}>
      <img src={preAvatar || userAvatar || userAv} alt="userAvatar" />
    </div>
  );
};
export default UserAvatar;


