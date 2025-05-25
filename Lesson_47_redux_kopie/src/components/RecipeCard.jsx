import React from 'react';
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

// при клике на карточку забрать объект рецепта из массива items и вставить в редаксе поле selectedRecipe

export default function RecipeCard({ recipe }) {
  const dispatch = useDispatch()
  
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={() => {
        dispatch(recipesSlice.actions.setSelectedRecipe(recipe))
      }}>
        <CardMedia 
          component="img"
          height="140"
          image={recipe.image}   
          alt={recipe.name}>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => {
          toast(`&{recipe.name} added to menu`)
        }}
        size="small" color="primary">
          Add to Menu
        </Button>
      </CardActions>
    </Card>    
  )
};
 
 