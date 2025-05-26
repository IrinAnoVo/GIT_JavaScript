import { useSelector } from "react-redux"
import NavBar from "./components/NavBar"
import Recipes from "./components/Recipes"
import { getCurrentPage } from "./store/page.slice"
import Categories from "./components/Categories"
import CategoryRecipes from "./components/CategoryRecipes"
import { ToastContainer } from "react-toastify"
import Menu from "./components/Menu"
import RecipeModal from "./components/RecipeModal"

function App() {
  const currentPage = useSelector(getCurrentPage)

  return (
    <>
      <NavBar />
      {currentPage === 'recipes' && <Recipes />}
      {currentPage === 'categories' && <Categories />}
      {currentPage === 'selected-category' && <CategoryRecipes />}
      {currentPage === 'menu' && <Menu />}
      <RecipeModal />
      <ToastContainer />

    </>
  )
}

export default App