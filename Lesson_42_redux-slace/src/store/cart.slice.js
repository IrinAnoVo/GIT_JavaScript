// {
//   items: [],
// }

// addProductToCart = function(state, action) {
//   items.push(action.payload.product)
// }

// removeFromCart = function(state, action) {
//   items = items.filter(item => item.id !== action.payload.product.id)
// }

// 1 - Создать слайс для управления состоянием корзины с помощью createSlice.
// 2 - начальное состояние будет пустым массивом
// 3 - Создать два редюсера: addProductToCart и removeProductFromCart
// 4 - Экспорировать редюсер и экшены из слайса
// 5 - Инициализировать слайс корзины в store
 
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  selectors: {
    getCartItems: (state) => state.items
  },
  reducers: {
    addProductToCart: (state, action) => {
      const existProduct = state.items.find(item => item.id === action.payload.product.id);
      if (existProduct) {
        existProduct.count++;
      } else {
        state.items.push({
          ...action.payload.product,
          count: 1,
        });
      }
    },
    removeProductFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});
export const { getCartItems } = cartSlice.selectors;

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
