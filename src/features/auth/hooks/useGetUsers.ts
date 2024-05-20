import { useGetUsersQuery } from '../../user/userApi';

export function useGetUsers() {
  const { data: users, isError } = useGetUsersQuery();

  return { users, isError };
}
