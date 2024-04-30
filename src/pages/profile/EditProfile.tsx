import React, { useState } from 'react';
import style from './scss/profile.module.scss';
import Button from '../../core/ui/Button';
import { Link } from 'react-router-dom';
import UserAvatar from '../../features/user/components/UserAvatar';
import EditForm from '../../features/user/components/EditForm';
import { useGetCurrentUser } from '../../features/user/hooks/useCurrentUser';

const EditProfile: React.FC = () => {
  const [preAvatar, setPreAvatar] = useState('');
  const { isError, user } = useGetCurrentUser();

  return (
    <div className={style.editProfile}>
      <Link to={'/profile'} className={style.button}>
        <Button>Назад</Button>
      </Link>
      <UserAvatar preAvatar={preAvatar} />
      {isError && <h3>Server Error</h3>}
      {user && <EditForm user={user} setPreAvatar={setPreAvatar} />}
    </div>
  );
};
export default EditProfile;
