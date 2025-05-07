import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.items.find(item => item.id === product.id);
      if (exist) {
        exist.count += 1;
      } else {
        state.items.push({ ...product, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.count += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.count > 1) item.count -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;