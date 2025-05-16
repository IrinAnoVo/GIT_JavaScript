import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async () => {
    try {
      const result = await fetch('https://dummyjson.com/recipes')
      const data = await result.json()

      return data.recipes
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }
)

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle' // pending, success, error
  },
  selectors: {
    getAllRecipes: function (state) {
      return state.items
    }
  },
  reducers: {
    // setRecipes: (state, action) => {
    //   state.items = action.payload
    // },
    // setPending: (state) => {
    //   state.status = 'pending'
    // },
    // setSuccess: (state) => {
    //   state.status = 'success'
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = 'success'
        state.items = action.payload
      })
      .addCase(getRecipes.rejected, (state) => {
        state.status = 'error'
      })
  }
})

export const { getAllRecipes } = recipesSlice.selectors
export default recipesSlice;