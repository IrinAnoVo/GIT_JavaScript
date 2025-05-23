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
  },
  {
    condition: (arg, store) => {
      const status = store.getState().recipes.status
      if (status !== 'idle')     // если статус idle, то можно делать запрос
        return false
    },
  }
)

export const getRecipesByCategory = createAsyncThunk(
  "categories/getRecipesByCategory",
  async (category) => {
    try {
      const result = await fetch(`https://dummyjson.com/recipes/tag/${category}`)
      const data = await result.json()

      return data.recipes
    } catch (error) {
      console.error('Error fetching recipes by category:', error)
    }
  },
)
 
export const getRecipesByMenu = createAsyncThunk(
  "menu/getRecipesByMenu",
  async (menu) => {
    try {
      const result = await fetch(`https://dummyjson.com/recipes/tag/${menu}`)
      const data = await result.json()

      return data.recipes
    } catch (error) {
      console.error('Error fetching recipes by menu:', error)
    }
  },
)
 
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle', // pending, success, error
    selectedRecipe: null,
    byCategory: [],
    loadingByCategory: false,
    byMenu: [],
    loadingByMenu: false,
  },
  selectors: {
    getAllRecipes: function (state) {
      return state.items
    },
    getByRecepies: (state) => state.byCategory,
  },
  reducers: {
   setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload    
    } 
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
      .addCase(getRecipesByCategory.pending, (state) => {
        state.loadingByCategory = true
      })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.loadingByCategory = false
        state.byCategory = action.payload
      })
      .addCase(getRecipesByCategory.rejected, (state) => {
        state.loadingByCategory = false
      }) 
      .addCase(getRecipesByMenu.pending, (state) => {
        state.loadingByMenu = true
      })
      .addCase(getRecipesByMenu.fulfilled, (state, action) => {
        state.loadingByMenu = false
        state.byMenu = action.payload 
      })
      .addCase(getRecipesByMenu.rejected, (state) => {
        state.loadingByMenu = false
      }) 
      
  }
})

export default recipesSlice;