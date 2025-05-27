import recipesSlice from "../store/recipes.slice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Recipe() {
  const selectedRecipe = useSelector(recipesSlice.selectors.getSelectedRecipe);
  const params = useParams()
  console.log('params', params);
  // https://dummyjson.com/recipes/${params.recipeId}

  return (
    <div>{selectedRecipe.name}</div>
  )
}