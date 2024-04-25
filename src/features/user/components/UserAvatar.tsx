import style from '../scss/user.module.scss';
import React from 'react';
import userAv from '/userAvatar.png';
import { useGetCurrentUser } from '../hooks/useCurrentUser';

type IProps = {
  preAvatar?: string;
};

const UserAvatar: React.FC<IProps> = ({ preAvatar }) => {
  const { user } = useGetCurrentUser();
  return (
    <div className={style.avatar}>
      <img src={preAvatar || user?.avatar || userAv} alt="userAvatar" />
    </div>
  );
};
export default UserAvatar;
