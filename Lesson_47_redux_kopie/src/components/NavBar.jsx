import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/page.slice';

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button
            onClick={() => {
              dispatch(setCurrentPage('recipes'))
            }}
            color="inherit">All Recipes</Button>
          <Button
            onClick={() => {
              dispatch(setCurrentPage('categories'))
            }}
            color="inherit">Categories</Button>
          <Button
            color="inherit"
            onClick={() => {
              dispatch(setCurrentPage('menu'))
            }}
          >Menu</Button>
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