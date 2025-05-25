import recipesSlice, { getRecipes } from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import RecipeCard from "./RecipeCard"
import { Grid } from "@mui/material"
// import { getRecipes } from "../api"

export default function Recipes() {
  // Получить список рецептов из состояния Redux с помощью useSelector
  const recipes = useSelector(recipesSlice.selectors.getAllRecipes)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.recipes.status) // Получить статус загрузки из состояния Redux

  useEffect(() => {
    // getRecipes(dispatch, getState) // Вызвать функцию getRecipes
    // dispatch(getRecipes) // Вызвать функцию getRecipes внутри Redux с использованием thunk
    dispatch(getRecipes()) // Вариант с использованием createAsyncThunk
  }, [dispatch]) // Запускать эффект только при изменении dispatch и status

  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      <Grid container spacing={2} columns={5}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} size={1}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}