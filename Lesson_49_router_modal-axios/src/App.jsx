import Recipes from "./components/Recipes"
import Categories from "./components/Categories"
import CategoryRecipes from "./components/CategoryRecipes"
import Menu from "./components/Menu"
import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Recipe from "./components/Recipe"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout /> }>
          <Route path="/" element={<Recipes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryRecipes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route path="/recipes/:recipeId" element={<Recipe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 