import { useSelector } from "react-redux"
import recipesSlice from "../store/recipes.slice"
import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard"

export default function CategoryRecipes() {
  const recipes = useSelector(recipesSlice.selectors.getByCategory)
  const status = useSelector((state) => state.recipes.loadingByCategory) // Получить статус загрузки из состояния Redux

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