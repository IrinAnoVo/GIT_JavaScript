import recipesSlice, { getRecipes } from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategories } from "../store/categories.slice"
// import { getRecipes } from "../api"
import RecipeCard from "./RecipeCard"

export default function Recipes() {
  // Получить список рецептов из состояния Redux с помощью useSelector
  const recipes = useSelector(recipesSlice.selectors.getAllRecipes)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.recipes.status) // Получить статус загрузки из состояния Redux

  useEffect(() => {
    // getRecipes(dispatch, getState) // Вызвать функцию getRecipes
    // dispatch(getRecipes) // Вызвать функцию getRecipes внутри Redux с использованием thunk
    dispatch(getRecipes())
    dispatch(getCategories()) // Вариант с использованием createAsyncThunk
  }, [dispatch]) // Запускать эффект только при изменении dispatch и status

  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      <div className='recipes'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  )
};

