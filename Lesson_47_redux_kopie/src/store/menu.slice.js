import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async () => {
    try {
      const result = await fetch("https://dummyjson.com/recipes/tags");
      const data = await result.json();

      return data;
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  },
  {
    condition: (arg, store) => {
      const status = store.getState().menu.status;
      if (status !== "idle") return false; // Если статус не idle, то ничего не делать
    },
  }
)

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    status: "idle", // pending, success, error
  },
  reducers: {
  },
  selectors: {
    getAllMenuItems: function (state) {
      return state.items;
    },
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