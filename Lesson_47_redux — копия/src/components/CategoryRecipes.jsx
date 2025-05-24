import { useSelector } from "react-redux"
import RecipeCard from "./RecipeCard"
import recipesSlice from "../store/recipes.slice"
import { Grid } from "@mui/material"

function CategoryRecipes() {
    // Получить список рецептов из состояния Redux с помощью useSelector
    const recipes = useSelector(recipesSlice.selectors.getByRecepies)
    const status = useSelector((state) => state.recipes.loadingByCategory) // Получить статус загрузки из состояния Redux
    
    return (
        <>
        {status && <h1>Loading...</h1>}
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

export default CategoryRecipes;
