import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../core/store';

export type SortType = {
  name: string;
  sort: string;
  order: string;
};

interface FilterState {
  search: string;
  category: number;
  sort: SortType;
  spicy: boolean;
  page: number ;
  loading: boolean;
  error: string | null;
}
const initialState: FilterState = {
  page:1,
  search: '',
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    deleteSearch: state => {
      state.search = '';
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
      state.page = 1
    },
    setOnlySpicy: (state, action: PayloadAction<boolean>) => {
      state.spicy = action.payload;
    },
    setPage:(state)=>{
      state.page = state.page+1
    }
  },
});
export const { setSort, setCategory, setOnlySpicy, setSearch, deleteSearch, setPage } =
  filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;
export const selectPage = (state: RootState) => state.filter.page;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectCategory = (state: RootState) => state.filter.category;
export const selectSearch = (state: RootState) => state.filter.search;
export default filterSlice.reducer;
