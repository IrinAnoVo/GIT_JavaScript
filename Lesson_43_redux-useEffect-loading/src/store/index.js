import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from './recipes.slice'

const store = configureStore({     //состояние redux из Арр {store}
  reducer: {
    [recipesSlice.name]: recipesSlice.reducer,
  },
})

export default store;