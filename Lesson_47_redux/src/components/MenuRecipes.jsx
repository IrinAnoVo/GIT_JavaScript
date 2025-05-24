import { useSelector } from "react-redux"
import RecipeCard from "./RecipeCard"
import menuSlice from "../store/menu.slice"
import { Grid } from "@mui/material"

function MenuRecipes() {
    // Получить список рецептов из состояния Redux с помощью useSelector
    const recipes = useSelector(menuSlice.selectors.getByRecipes)
    const status = useSelector((state) => state.menu.loadingByMenu) // Получить статус загрузки из состояния Redux


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

export default MenuRecipes;
