import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getMenu = createAsyncThunk(
    "menu/getMenu",
    async () => {
        try {
            const result = await fetch('https://dummyjson.com/recipes')
            const data = await result.json();

            return data.recipes;            
        }
        catch (error) {
            console.log("Error fetching menu:", error);            
        }
    },
    {
    condition: (arg, store) => {
      const status = store.getState().categories.status;
      if (status !== "idle") return false; // Если статус не idle, то ничего не делать
    },
  }
)
 
const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: [],
        status: "idle",
    },
    reducers: {       
    },  
    selectors: {
        /*getAllMenu: (state) => {
          console.log("getAllMenu selector called with:", state)
          return state.items;
        }*/
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


export const selectedMenu = (state) => state.menu.items;
export const getMenuStatus = (state) => state.menu.status;
export default menuSlice;
