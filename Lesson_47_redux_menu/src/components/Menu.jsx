import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import menuSlice, { getMenu } from "../store/menu.slice";

export default function Menu() {
    const menu = useSelector(menuSlice.selectors.getAllRecipes)
    const dispatch = useDispatch()
    const status = useSelector((state) => state.menu.status)
    
    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])

    return ( 
        <>
        {status === 'pending' && <h1>Loading...</h1>}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Recipes</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                    <TableCell align="right">Instructions</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Rating</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {menu.map((recipe) => (
                <TableRow
                key={recipe.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                {recipe.name}
                </TableCell>
                <TableCell align="right">{recipe.ingredients.join(", ")}</TableCell>
                <TableCell align="right">{recipe.instructions}</TableCell>
                <TableCell align="right">{recipe.calories}</TableCell>
                <TableCell align="right">{recipe.rating}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
    </>
    )
}