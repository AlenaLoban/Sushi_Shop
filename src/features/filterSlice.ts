import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../core/store';

export type SortType = {
  name: string;
  sort: string;
  order: string;
};

interface FilterState {
  category: number;
  sort: SortType;
  spicy: boolean;
  loading: boolean;
  error: string | null;
}
const initialState: FilterState = {
  category: 0,
  sort: { name: 'рейтингу', sort: 'rating', order: 'desc' },
  spicy: false,
  loading: false,
  error: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setOnlySpicy: (state, action: PayloadAction<boolean>) => {
      state.spicy = action.payload;
    },
  },
});
export const { setSort, setCategory, setOnlySpicy } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectCategory = (state: RootState) => state.filter.category;
export default filterSlice.reducer;
