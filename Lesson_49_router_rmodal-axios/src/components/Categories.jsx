import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import categoriesSlice, { getCategories } from "../store/categories.slice"
import { Grid, Box } from "@mui/material"
import { getRecipesByCategory } from "../store/recipes.slice"
import { Link } from 'react-router';

export default function Categories() {
  const categories = useSelector(categoriesSlice.selectors.getAllCategories)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.categories.status)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])


  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      <Grid container columns={4}>
        {categories.map((category) => (
          <Grid key={category} size={1}>
            <Link to={`/categories/${category}`} >
              <Box
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}