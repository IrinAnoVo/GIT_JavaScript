/*
import recipesSlice from "../store/recipes.slice"

export const getRecipes = (dispatch, getState) => {
  const status = getState().recipes.status
  if (status !== 'idle') return                  //Loading
  dispatch(recipesSlice.actions.setPending())    //Loading
  fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((data) => {
      dispatch(recipesSlice.actions.setSuccess())     //Loading
      dispatch(recipesSlice.actions.setRecipes(data.recipes))
    })
    .catch((error) => console.error('Error fetching recipes:', error))
}
    */
  