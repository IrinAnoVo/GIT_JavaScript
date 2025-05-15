import recipesSlice from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function Recipes() {
  const recipes = useSelector(recipesSlice.selectors.getAllRecipes)
  const status = useSelector((state) => state.recipes.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(recipesSlice.actions.setPending())    //Loading
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        dispatch(recipesSlice.actions.setSuccess())     //Loading
        dispatch(recipesSlice.actions.setRecipes(data.recipes))
      })
      .catch((error) => console.error('Error fetching recipes:', error))
  }, [dispatch])

    if (status === 'pending') {                                         //Loading
      return <div className="text-gray-500">Загрузка рецептов...</div>       //Loading
    }
  return (
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
  )
}