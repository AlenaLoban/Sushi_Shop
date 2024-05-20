import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../core/store';
import { IItem } from '../../../hooks/types/data';

interface CartState {
  cartItems: IItem[];
  total: number;
}
const initialState: CartState = {
  cartItems: [],
  total: 0,
};
export const getTotalPrice = (items: IItem[]): number => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IItem>) => {
      const findItem: IItem | undefined = state.cartItems.find(
        obj => obj.id === action.payload.id,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.total = getTotalPrice(state.cartItems);
    },

    minusCount: (state, action: PayloadAction<number>) => {
      const findItem: IItem | undefined = state.cartItems.find(
        obj => obj.id === action.payload,
      );
      if (findItem) {
        findItem.count--;
      }
      state.total = getTotalPrice(state.cartItems);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
      state.total = getTotalPrice(state.cartItems);
    },
    clearCartItems: state => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});
export const { addItem, removeItem, clearCartItems, minusCount } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
