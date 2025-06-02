import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import categoriesSlice, { getCategories } from "../store/categories.slice"
import { Grid, Box } from "@mui/material"
import { Link } from "react-router"
import { Link as MuiLink} from "@mui/material"

export default function Categories() {
  const categories = useSelector(categoriesSlice.selectors.getAllCategories)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.categories.status)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
    {/*<NavBar />*/}
      {status === 'pending' && <h1>Loading...</h1>}
      <Grid container columns={4}>
        {categories.map((category) => (
          <Grid key={category} size={1}>
            <MuiLink
            component={Link}
            to={`/categories/${category}`}
            color="inherit"
            underline="none"
            >
            <Box
              onClick={() => {
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
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </>
  )
}