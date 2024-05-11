// store.js
import { configureStore } from '@reduxjs/toolkit';
import likeReducer from './SliceReducer';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    like: likeReducer,
    cart: cartReducer 
  }
});

