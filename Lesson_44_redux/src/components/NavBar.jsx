import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit">All Recipes</Button>
                    <Button color="inherit">Categories</Button>
                    <Button color="inherit">Menu</Button>
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}