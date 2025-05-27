import { useSelector, useDispatch } from "react-redux"
import recipesSlice, { getRecipesByCategory } from "../store/recipes.slice"
import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard"
import { useParams } from "react-router"
import { useEffect } from "react"

export default function CategoryRecipes() {
  const recipes = useSelector(recipesSlice.selectors.getByCategory)
  const status = useSelector((state) => state.recipes.loadingByCategory) // Получить статус загрузки из состояния Redux
  const { categoryId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipesByCategory(categoryId))
  }, [dispatch, categoryId])

  return (
    <>
      {status && <h1>Loading...</h1>}
      <Grid container spacing={2} columns={4}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} size={1}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  )
} 