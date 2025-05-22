import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const result = await fetch('https://dummyjson.com/recipes/tags')
      const data = await result.json()

      return data
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },
  {
    condition: (arg, store) => {
      const status = store.getState().categories.status
      if (status !== 'idle')     // если статус idle, то можно делать запрос
        return false
    },
  }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
        status: 'idle' // pending, success, error
    },
    selectors: {
        getCategories: function (state) {
        return state.items
        }
    },
    reducers: {
        // setCategories: (state, action) => {
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
        .addCase(getCategories.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
        })
        .addCase(getCategories.rejected, (state) => {
            state.status = 'error'
        })
    } 
})

export default categoriesSlice;  