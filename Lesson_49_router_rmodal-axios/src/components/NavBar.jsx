import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link } from 'react-router';
import { Link as MuiLink } from "@mui/material"

export default function NavBar({ handleOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid width={"100%"} container columns={2}>
            <Grid size={1}>
              <MuiLink component={Link} to="/" color="inherit">
                <Button color="inherit">All Recipes</Button>
              </MuiLink>
              <MuiLink component={Link} to="/categories" color="inherit">
                <Button color="inherit">Categories</Button>
              </MuiLink>
              <MuiLink component={Link} to="/menu" color="inherit">
                <Button color="inherit">Menu</Button>
              </MuiLink>
            </Grid>
            <Grid size={1} display="flex" justifyContent="flex-end">
              <Button color="inherit" onClick={() => {
                handleOpen()
              }}>
                Add new recipe
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}