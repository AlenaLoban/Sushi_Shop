import React from 'react';
import {UserAvatar} from '../../features/user';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { LuPhone } from 'react-icons/lu';
import { useGetCurrentUser } from '../../features/user/hooks/useCurrentUser';

const UserProfile: React.FC = () => {
  const { user, isError } = useGetCurrentUser();

  return (
    <div className={style.userProfile}>
      <Link to={'/profile'} className={style.button}>
        <Button>Назад</Button>
      </Link>
      {isError && <h3>Server Error</h3>}

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
