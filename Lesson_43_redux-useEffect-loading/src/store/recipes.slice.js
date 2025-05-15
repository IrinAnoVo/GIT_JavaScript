import { createSlice } from '@reduxjs/toolkit'

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle'   //Loading
  },
  selectors: {
    getAllRecipes: (state) => state.items
  },
  reducers: {
    setRecipes: (state, action) => {
      state.items = action.payload
    },
    setPending: (state) => {    //loading
      state.status = 'pending'
    },
    setSuccess: (state) => {    //Loading
      state.status = 'success'
    },
  }
})

export default recipesSlice;