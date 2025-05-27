import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Link as MuiLink} from "@mui/material"

export default function NavBar() {
  // const dispatch = useDispatch();
  const { t } = useTranslation();             //i18n для инициализации переводов
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <MuiLink component={Link} to="/" color="inherit">
            <Button color="inherit">{t("All Recipes")}</Button>
          </MuiLink>
          <MuiLink component={Link} to={"/categories"} color="inherit" >
            <Button color="inherit">Categories</Button>
          </MuiLink>
          <MuiLink component={Link} to={"/menu"} color="inherit" >
            <Button color="inherit">Menu</Button>
          </MuiLink>
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