import recipesSlice from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function Recipes() {
  const recipes = useSelector(recipesSlice.selectors.getAllRecipes)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        dispatch(recipesSlice.actions.setRecipes(data.recipes))
      })
      .catch((error) => console.error('Error fetching recipes:', error))
  }, [dispatch])

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