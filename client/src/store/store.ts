/* eslint-disable indent */
import { configureStore } from '@reduxjs/toolkit';
import SharedReducer from './shared/shared.slice';
import FilterReducer from './filter/filter.slice';
import CartReducer from './cart/cart.slice';

export const store = configureStore({
  reducer: {
    SharedReducer,
    FilterReducer,
    CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
