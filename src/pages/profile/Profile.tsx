import style from './scss/profile.module.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEditNote, MdDelete } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { useDeleteUserMutation } from '../../features/user/userApi';
import cn from 'classnames';
import Button from '../../core/ui/Button';
import { FiAlertTriangle } from 'react-icons/fi';
import { useGetCurrentUser } from '../../features/user/hooks/useCurrentUser';
import { IUser } from '../../hooks/types/IUsersType';

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isError, user } = useGetCurrentUser();

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteProfile = (user: IUser) => {
    deleteUser(user.id);
    localStorage.removeItem('token');

    const avatars = localStorage.getItem('userAvatars') || '';
    if (avatars) {
      const usersAvatars = JSON.parse(avatars);
      delete usersAvatars[user.email];
      localStorage.setItem('userAvatars', JSON.stringify(usersAvatars));
    }
    setOpen(false);
    navigate('/');
  };

  return (
    <div className={style.profile}>
      <Link to={'/catalog'} className={style.button}>
        <Button>Назад</Button>
      </Link>
      {isError && <h3>Server Error</h3>}
      {user && (
        <div className={style.profile__box}>
          <Link to={'/user'} className={style.profile__box__actions}>
            <ImProfile size={20} />
            <p>Посмотреть профиль</p>
          </Link>
          <Link to={'/editProfile'} className={style.profile__box__actions}>
            <MdEditNote size={25} />
            <p>Изменить профиль</p>
          </Link>
          <div
            className={style.profile__box__actions}
            onClick={() => setOpen(true)}
          >
            <MdDelete size={20} />
            <p>Удалить профиль </p>
          </div>
          {open && (
            <div className={cn(style.profile__box__actions, style.delete)}>
              <div className={style.delete__body}>
                <FiAlertTriangle size={35} />
                <p>
                  Тебуется подтверждение.
                  <br /> Вы действительно хотите удалить профиль?
                </p>
              </div>
              <div className={style.delete__buttonBox}>
                <Button onClick={() => handleDeleteProfile(user)}>
                  удалить
                </Button>
                <Button onClick={() => setOpen(false)}>отмена</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Profile;


