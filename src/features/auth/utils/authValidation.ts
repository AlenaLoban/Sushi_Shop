import { IUser } from '../../../hooks/types/IUsersType';
import { Inputs } from '../components/types';

type IPropsForCheck = {
  email: string;
  password: string;
};

const saveToken = (data: Inputs | IPropsForCheck) => {
  localStorage.setItem('token', btoa(`${data.email}:${data.password}`));
  localStorage.setItem('userEmail', JSON.stringify(data.email));
};

export const createRegUser = (
  data: Omit<Inputs, 'conf_password'>,
  users: IUser[],
  userId: string,
) => {
  const findUser = users.find(user => user.email === data.email);
  if (users.length > 0) {
    if (!findUser) {
      saveToken(data);
      return true;
    } else {
      if (findUser.id === userId) return true;
    }
  } else {
    saveToken(data);
    return true;
  }
};

export const checkUser = (data: IPropsForCheck, users: IUser[]) => {
  const findUser = users.find(user => user.email === data.email);
  const check = {
    status: false,
    error: '',
  };

  if (findUser) {
    if (findUser?.password === data.password) {
      saveToken(data);
      return { ...check, status: true };
    }
    return { ...check, error: 'Неверный пароль. Проверьте заполнение данных.' };
  }
  return {
    ...check,
    error: `Пользователя с почтой ${data.email} не существует. Проверьте заполнение данных.`,
  };
};
