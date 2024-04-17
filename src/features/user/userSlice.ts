import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../core/store';
import { IUser } from '../../hooks/types/IUsersType';

interface UserState {
  user: IUser | undefined;
}
const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});
export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
