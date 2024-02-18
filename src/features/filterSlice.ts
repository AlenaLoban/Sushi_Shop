import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../core/store";

export type SortType = {
  name: string;
  sort: string;
  order: string;
};

interface FilterState {
  category: number | string;
  sort: SortType;
  loading: boolean;
  error: string | null;
}
const initialState: FilterState = {
  category: 0,
  sort: { name: "цене", sort: "price", order: "esc" },
  loading: false,
  error: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<number | string>) => {
      state.category = action.payload;
    },
  },
});
export const { setSort, setCategory } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export default filterSlice.reducer;
