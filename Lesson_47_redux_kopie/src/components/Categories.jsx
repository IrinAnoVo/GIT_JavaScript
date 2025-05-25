import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import categoriesSlice, { getCategories } from "../store/categories.slice"
import { Grid, Box } from "@mui/material"
import { getRecipesByCategory } from "../store/recipes.slice"
import { setCurrentPage } from "../store/page.slice"

export default function Categories() {
  const categories = useSelector(categoriesSlice.selectors.getAllCategories)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.categories.status)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  // При клике на категорию отправить запрос по адресу "https://dummyjson.com/recipes/tag/Pakistani" после получить массив рецептов этой категории и добавить их в поле под названием byCategory в recipesSlice
  // Потом поменять странциу на selected-category при тем же клике
  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      <Grid container columns={4}>
        {categories.map((category) => (
          <Grid key={category} size={1}>
            <Box
              onClick={() => {
                dispatch(getRecipesByCategory(category))
                dispatch(setCurrentPage("selected-category"))
              }}
              sx={{
                paddingY: "100px",
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "lightblue",
                  color: "white",
                  cursor: "pointer"
                },
                fontSize: "22px",
                fontWeight: "bold",
              }}>
              {category}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}