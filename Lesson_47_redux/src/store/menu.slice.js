import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async () => {
    try {
      const result = await fetch('https://dummyjson.com/recipes/meal-type/snack')
      const data = await result.json()

      return data
    } catch (error) {
      console.error('Error fetching menu:', error)
    }
  },
  {
    condition: (arg, store) => {
      const status = store.getState().menu.status
      if (status !== 'idle')     // если статус idle, то можно делать запрос
        return false
    },
  }
)

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        items: [],
        status: 'idle' // pending, success, error
    }, 
    selectors: {        
        getMenu: function (state) {
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
        .addCase(getMenu.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getMenu.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
        })
        .addCase(getMenu.rejected, (state) => {
            state.status = 'error'
        })
    } 
})

export default menuSlice;  