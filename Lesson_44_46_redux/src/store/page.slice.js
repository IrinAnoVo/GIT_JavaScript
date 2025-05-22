import { createSlice } from "@reduxjs/toolkit";
 
const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "recipes", // recipes, categories, selected-recipe, menu, selected-category
  },
  selectors: {
    getCurrentPage: (state) => state.currentPage,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  }
})
 
export const { getCurrentPage } = pageSlice.selectors;
export const { setCurrentPage } = pageSlice.actions;
export default pageSlice;

