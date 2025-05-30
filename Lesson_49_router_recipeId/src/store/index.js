import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from './recipes.slice'
import categoriesSlice from './categories.slice'
import pageSlice from './page.slice'
import menuSlice from './menu.slice'

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // ...
//     }
//   }
// }
const loggerMiddleware = () => (next) => (action) => {
  console.group(action.type)
  console.log('dispatching', action)
  console.groupEnd()
  return next(action)
}

// const thunk = (store) => (next) => (getRecipes) => {
//   if (typeof getRecipes === 'function') {
//     return getRecipes(store.dispatch, store.getState)
//   }
//   return next(action)
// }

const store = configureStore({
  reducer: {
    [recipesSlice.name]: recipesSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [pageSlice.name]: pageSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})

export default store;