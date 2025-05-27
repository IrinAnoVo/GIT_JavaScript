import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useDispatch } from 'react-redux';
import recipesSlice from '../store/recipes.slice'; 
import { toast } from 'react-toastify';
import menuSlice from '../store/menu.slice';         // импортируем слайс меню, чтобы использовать его в компоненте
import { useTranslation } from 'react-i18next'; // i18n для инициализации переводов

// при клике на карточку забрать объект рецепта из массива items и вставить в редаксе поле selectedRecipe
export default function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const { t } = useTranslation(); // i18n для инициализации переводов

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={() => {
        dispatch(recipesSlice.actions.setSelectedRecipe(recipe));
      }}>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            toast(`${recipe.name} added to menu`)
            dispatch(menuSlice.actions.addToMenu(recipe))       // добавляем рецепт в меню, без добавления запроса на рецепты в редюсерах в menu.slice
          }}
          size="small" color="primary">
          {t("Add to menu")}
        </Button>
      </CardActions>
    </Card>
  );
}