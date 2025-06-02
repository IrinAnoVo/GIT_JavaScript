import Categories from "./components/Categories"
import Layout from "./components/Layout"
import Recipes from "./components/Recipes"
import { Routes, Route } from "react-router"
import CategoryRecipes from "./components/CategoryRecipes"
import Recipe from "./components/Recipe"

function App() {
  //открываем модальное окно с созданием нового рецепта

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Recipes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryRecipes />} />
          <Route path="*" element={<h1>Не туда зашел</h1>}></Route>
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/menu" element={<h1>Menu</ h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App; 