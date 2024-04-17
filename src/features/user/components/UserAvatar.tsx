import style from '../scss/user.module.scss';
import React from 'react';
import userAv from '/userAvatar.png';
import { useAppSelector } from '../../../core/store/hooks';
import { selectCurrentUser } from '../userSlice';

type IProps = {
  preAvatar?: string;
};

const UserAvatar: React.FC<IProps> = ({ preAvatar }) => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className={style.avatar}>
      <img
        src={preAvatar || (user && user?.avatar) || userAv}
        alt="userAvatar"
      />
    </div>
  );
};
export default UserAvatar;
