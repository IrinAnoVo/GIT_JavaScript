import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

// при клике на карточку забрать объект рецепта из массива items и вставить в редаксе поле selectedRecipe
export default function RecipeCard({ recipe }) {
 
  return (
    <Card sx={{ maxWidth: 500, height: '100%' }}>
      <CardActionArea sx={{ height: '250px' }}>
        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
        </Link>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            toast(`${recipe.name} added to menu`)
          }}
          size="small" color="primary">Add to menu</Button>
      </CardActions>
    </Card>
  );
} 