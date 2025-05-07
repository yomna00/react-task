import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadCartFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load cart:', e);
  }
  return [];
};

const saveCartToLocalStorage = (state) => {
  try {
    const items = state.cart.items;
    localStorage.setItem('cartItems', JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save cart:', e);
  }
};

const preloadedState = {
  cart: {
    items: loadCartFromLocalStorage(),
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});

export default store;