import { useGetUserByEmailQuery } from '../userApi';

export function useGetCurrentUser() {
  const isToken = localStorage.getItem('token');
  const userEmail = isToken ? atob(isToken).split(':')[0] : '';
  const { data = [], isError } = useGetUserByEmailQuery(userEmail);
  const user = data && data[0];

  return { isError, user };
}
