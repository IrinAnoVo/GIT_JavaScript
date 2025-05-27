import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/page.slice';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const dispatch = useDispatch();
  const { t } = useTranslation();             //i18n для инициализации переводов
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button
            onClick={() => {
              dispatch(setCurrentPage('recipes'))
            }}
            color="inherit">{t("All Recipes")}</Button>              {/*i18n для инициализации переводов*/}
          <Button
            onClick={() => {
              dispatch(setCurrentPage('categories'))
            }}
            color="inherit">{t("Categories")}</Button>
          <Button            
            onClick={() => {
              dispatch(setCurrentPage('menu'))
            }}
            color="inherit">{t("Menu")}</Button>
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