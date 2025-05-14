import { createSlice } from '@reduxjs/toolkit';

const calculateStatistics = (products) => {
  const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalBeforeDiscount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const totalDiscounts = products.reduce((sum, product) => sum + (product.discount || 0) * product.quantity, 0);
  const finalTotal = totalBeforeDiscount - totalDiscounts;
  const averagePrice = totalProducts > 0 ? totalBeforeDiscount / totalProducts : 0;

  return {
    totalProducts,
    totalBeforeDiscount,
    totalDiscounts,
    finalTotal,
    averagePrice
  };
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    stats: {
      totalProducts: 0,
      totalBeforeDiscount: 0,
      totalDiscounts: 0,
      finalTotal: 0,
      averagePrice: 0
    }
  },
  selectors: {
    getProducts: (state) => state.products,
    getStats: (state) => state.stats
  },
  reducers: {
    IncrementPriceAction: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.price += action.payload.amount
        }
      })
      state.stats = calculateStatistics(state.products);
    },
    IncrementQuantityAction: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity += action.payload.amount
        }
      })
      state.stats = calculateStatistics(state.products);
    },
    SortProductsAction: (state, action) => {
      switch (action.payload.criteria) {
        case 'name':
          state.products.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          state.products.sort((a, b) => a.price - b.price);
          break;
        case 'quantity':
          state.products.sort((a, b) => a.quantity - b.quantity);
          break;
        default:
          break;
      }
    },
    InitializeProductsAction: (state, action) => {
      state.products = action.payload.products;
      state.stats = calculateStatistics(state.products);
    }
  }
})

export const { getProducts, getStats } = productsSlice.selectors;

export const { IncrementPriceAction, IncrementQuantityAction, SortProductsAction, InitializeProductsAction } = productsSlice.actions;

export default productsSlice.reducer;