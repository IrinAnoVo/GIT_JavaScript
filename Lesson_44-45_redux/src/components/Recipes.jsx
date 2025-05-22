import recipesSlice, { getRecipes } from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
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
      <div className='recipes'>
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-card__image">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="recipe-card__content">
              <h2 className="recipe-card__title">{recipe.name}</h2>
              <p className="recipe-card__description">{recipe.instructions.join(' ')}</p>
              <button className="recipe-card__button">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}