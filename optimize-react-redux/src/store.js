// 1. Создать начальное состояние в виде такого объекта
// const initialState = {
// products: [],
// stats: {
// totalProducts: 0,
// totalBeforeDiscount: 0,
// totalDiscounts: 0,
// finalTotal: 0,
// averagePrice: 0
// },
// }
// 2. Создать экшены для увеличения и уменьшения количества товара
// Для увеличения и уменьшения цены товара
// Для сортировки
// Для инициализации продуктов

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"
import products from './products.json';

const initialProducts = products.slice(0, 6);

const initialState = {
    products: [],
    stats: {
        totalProducts: 0,
        totalBeforeDiscount: 0,
        totalDiscounts: 0,
        finalTotal: 0,
        averagePrice: 0
    },
}

export const IncrementPriceAction = createAction('incrementPrice')
export const IncrementQuantityAction = createAction('incrementQuantity')
export const SortProductsAction = createAction('setProducts') 
export const InitializeProductsAction = createAction('initializeProducts')
export const StatisticProductAction = createAction('statisticProduct')

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

// 3. Создать редюсер, который будет обрабатывать эти экшены и обновлять состояние 
// используя createReducer
// 4. Создать store и подключить его к приложению
// 5. В main.jsx обернуть приложение в Provider и передать store

const productReducer = createReducer(initialState, (builder) => {
    builder

    .addCase(IncrementPriceAction, (state, action) => {  //мутабельно
        state.products.forEach((product) => {
            if (product.id === action.payload.id) {
            product.price += action.payload.amount
            }
        })
        state.stats = calculateStatistics(state.products);
    })

    .addCase(IncrementQuantityAction, (state, action) => {  //мутабельно
        state.products = state.products.map(product =>
            product.id === action.payload.id ?
            { ...product, quantity: Math.max(1, product.quantity + action.payload.amount) } :
            product
        )
        state.stats = calculateStatistics(state.products);
    })
    
    .addCase(SortProductsAction, (state, action) => {
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
    })

    .addCase(InitializeProductsAction, (state, action) => {
        state.products = action.payload.products;
        state.stats = calculateStatistics(state.products);
    }) 

})
        
export const store = configureStore({
    reducer: productReducer,
});

store.dispatch(InitializeProductsAction({
    products: initialProducts
}))

store.dispatch(StatisticProductAction())  

// Попробовать удалить весь store и самостоятельно его реализовать.
// Добавитт в store статистику и исправить компонент статистики чтобы он использовал redux

