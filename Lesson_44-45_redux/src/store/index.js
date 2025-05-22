import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from './recipes.slice'

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // ...
//     }
//   }
// }
const loggerMiddleware = (store) => (next) => (action) => {
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})

export default store;