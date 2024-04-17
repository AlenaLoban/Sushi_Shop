import React, { useState } from 'react';
import RegisterForm from '../../features/auth/components/RegisterForm';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import { Link } from 'react-router-dom';
import UserAvatar from '../../features/user/components/UserAvatar';
import { useAppSelector } from '../../core/store/hooks';
import { selectCurrentUser } from '../../features/user/userSlice';

const EditProfile: React.FC = () => {
  const [preAvatar, setPreAvatar] = useState('');
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className={style.editProfile}>
      <Link to={'/profile'} className={style.button}>
        <Button>Назад</Button>
      </Link>
      <UserAvatar preAvatar={preAvatar} />
      {user && <RegisterForm user={user} setPreAvatar={setPreAvatar} />}
    </div>
  );
};
export default EditProfile;
