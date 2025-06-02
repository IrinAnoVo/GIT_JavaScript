import { useEffect } from "react";
import recipesSlice from "../store/recipes.slice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipeById } from "../store/recipes.slice"; // Импортируем асинхронный экшен для получения рецепта по ID 

export default function Recipe() {
  const selectedRecipe = useSelector(recipesSlice.selectors.getSelectedRecipe);
  const dispatch = useDispatch()
  const { recipeId } = useParams()

useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [dispatch, recipeId])

if (!selectedRecipe) {
    return <h1>Loading...</h1>
  }
 
  return (
    <div>{selectedRecipe?.name}
      <img src={selectedRecipe?.image} alt={selectedRecipe?.name} />
      <p>{selectedRecipe?.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {selectedRecipe?.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> 
      </div>
  )
}
