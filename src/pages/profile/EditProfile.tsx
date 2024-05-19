import React, { useState } from 'react';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import { Link } from 'react-router-dom';
import UserAvatar from '../../features/user/components/UserAvatar';
import EditForm from '../../features/user/components/EditForm';
import { useLocation } from 'react-router-dom';

const EditProfile: React.FC = () => {
  const [preAvatar, setPreAvatar] = useState('');
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className={style.editProfile}>
      <Link to={'/profile'} className={style.button}>
        <Button>Назад</Button>
      </Link>
      <UserAvatar preAvatar={preAvatar} />
      {user && <EditForm user={user} setPreAvatar={setPreAvatar} />}
    </div>
  );
};
export default EditProfile;
