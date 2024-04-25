import React from 'react';
import UserAvatar from '../../features/user/components/UserAvatar';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { LuPhone } from 'react-icons/lu';
// import { useGetCurrentUser } from '../../features/user/hooks/useCurrentUser';
import {useLocation} from 'react-router-dom';

const UserProfile: React.FC = () => {
//   const { user } = useGetCurrentUser();
  const location = useLocation();
  const user = location.state.user
  

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
