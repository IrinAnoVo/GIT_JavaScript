import { useDispatch, useSelector } from "react-redux"
import categoriesSlice, { getCategories } from "../store/categories.slice"
import { useEffect } from "react"
import { Grid } from "@mui/material"

export default function Categories() {
  // Получить список категорий из состояния Redux с помощью useSelector
  const categories = useSelector(categoriesSlice.selectors.getCategories)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.categories.status)

useEffect(() => {
    // getRecipes(dispatch, getState) // Вызвать функцию getRecipes
    // dispatch(getRecipes) // Вызвать функцию getRecipes внутри Redux с использованием thunk   
    dispatch(getCategories()) // Вариант с использованием createAsyncThunk
  }, [dispatch])
    return (
        <>
        {status === 'pending' && <h1>Loading...</h1>}
        <Grid container spacing={2} columns={6}>
            {categories.map((category) => (
            <Grid onClick={categoty}     key={category} size={1}>




                {category}
            </Grid>         
            ))}
        </Grid>
        </>
    )
};