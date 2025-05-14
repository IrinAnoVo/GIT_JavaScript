import { configureStore } from '@reduxjs/toolkit';
import products from '../products.json';
import productsReducer, { InitializeProductsAction } from './products.slice.js';
import cartReducer from './cart.slice.js';

const initialProducts = products.slice(0, 100);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(InitializeProductsAction({
  products: initialProducts
}))