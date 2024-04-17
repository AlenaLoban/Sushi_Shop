import React from 'react';
import UserAvatar from '../../features/user/components/UserAvatar';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../core/store/hooks';
import { selectCurrentUser } from '../../features/user/userSlice';
import { FiMail } from 'react-icons/fi';
import { LuPhone } from 'react-icons/lu';

const UserProfile: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className={cn(style.userProfile, style.container)}>
      <Link to={'/profile'} className={style.button}>
        <Button>Назад</Button>
      </Link>

      {user && (
        <div className={style.userProfile__user}>
          <div className={style.userProfile__user__avatar}>
            <UserAvatar />
          </div>
          <h1>{user.name}</h1>
          <div className={style.userProfile__user__body}>
            <div>
              <FiMail />
              <p>{user.email}</p>
            </div>
            <div>
              <LuPhone />
              <p>{user.tel}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
