import { baseApi } from '../../core/store/api';
import { IUser } from '../../hooks/types/IUsersType';

const userApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['users'] })
  .injectEndpoints({
    endpoints: build => ({
      getUsers: build.query<IUser[], void>({
        query: () => `/users`,
        providesTags: result =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'users', id }) as const),
                { type: 'users', id: 'LIST' },
              ]
            : [{ type: 'users', id: 'LIST' }],
      }),
      getUserByEmail: build.query<IUser[], string>({
        query: email => `/users?email=${email}`,
        providesTags: [{ type: 'users', id: 'LIST' }],
      }),
      addUser: build.mutation<IUser, Partial<IUser>>({
        query: body => ({
          url: `/users`,
          method: 'POST',
          body,
        }),
        invalidatesTags: [{ type: 'users', id: 'LIST' }],
      }),
      deleteUser: build.mutation<IUser, string>({
        query: id => ({
          url: `/users/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [{ type: 'users', id: 'LIST' }],
      }),
      updateUser: build.mutation<IUser, IUser>({
        query: user => ({
          url: `/users/${user.id}`,
          method: 'PUT',
          body: user,
        }),
        invalidatesTags: [{ type: 'users', id: 'LIST' }],
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUserByEmailQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
