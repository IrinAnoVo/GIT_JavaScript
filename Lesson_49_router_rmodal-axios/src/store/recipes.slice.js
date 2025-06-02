import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addNewRecipe = createAsyncThunk(
  "recipes/addNewRecipe",
  async (recipeData) => {
    try {
      const response = await axios.post('https://dummyjson.com/recipes/add', recipeData)
      return response.data // Возвращаем данные нового рецепта
    } catch (error) {
      console.error('Error adding new recipe:', error)
    }
  }
)

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
      if (status !== 'idle') return false // Если статус не idle, то ничего не делать
    },
  }
)

export const getRecipesByCategory = createAsyncThunk(
  "recipes/getRecipesByCategory",
  async (category) => {
    try {
      const result = await fetch(`https://dummyjson.com/recipes/tag/${category}`)
      const data = await result.json()

      return data.recipes
    } catch (error) {
      console.error('Error fetching recipes by category:', error)
    }
  }
)

export const getRecipeById = createAsyncThunk(
  "recipes/getRecipeById",
  async (recipeId) => {
    try {
      const result = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
      const data = await result.json()

      return data
    } catch (error) {
      console.error('Error fetching recipe by id:', error)
    }
  }
)

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [], // Все рецепты
    status: 'idle', // pending, success, error
    selectedRecipe: null, // Для хранения выбранного рецепта
    byCategory: [], // Рецепты выбранной категории
    loadingByCategory: false,
  },
  selectors: {
    getAllRecipes: function (state) {
      return state.items
    },
    getByCategory: (state) => state.byCategory,
    getSelectedRecipe: (state) => state.selectedRecipe
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
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload
      })
      .addCase(addNewRecipe.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
  }
})

export default recipesSlice;