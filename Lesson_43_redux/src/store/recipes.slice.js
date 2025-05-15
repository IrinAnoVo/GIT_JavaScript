import { createSlice } from '@reduxjs/toolkit'

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
  },
  selectors: {
    getAllRecipes: (state) => state.items
  },
  reducers: {
    setRecipes: (state, action) => {
      state.items = action.payload
    },
  }
})

export default recipesSlice;