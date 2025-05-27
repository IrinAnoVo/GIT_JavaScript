import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { getMenuStatus, selectedMenu } from "../store/menu.slice";

export default function Menu() {
    /*const dispatch = useDispatch()*/
    const menu = useSelector(selectedMenu)    
    const status = useSelector(getMenuStatus)

    /*useEffect(() => {
        dispatch(getMenu())
    }, [dispatch]) 
    */

    return ( 
        <>
        {status === 'pending' && <h1>Loading...</h1>}
        <TableContainer component={Paper}>
            <h1>My Menu</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Recipe Name</TableCell>
                    <TableCell align="left">Ingredients</TableCell>
                    <TableCell align="left">Instructions</TableCell>
                    <TableCell align="left">Calories</TableCell>
                    <TableCell align="left">Rating</TableCell>
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
                <TableCell align="left">{recipe.ingredients.join(", ")}</TableCell>
                <TableCell align="left">{recipe.instructions}</TableCell>
                <TableCell align="left">{recipe.caloriesPerServing}</TableCell>
                <TableCell align="left">{recipe.rating}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
    </>
    )
}