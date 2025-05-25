import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import recipesSlice from '../store/recipes.slice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
}

export default function RecipeModal() {
  const dispatch = useDispatch()
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe) 

  const handleClose = () => {
    dispatch(recipesSlice.actions.setSelectedRecipe(null))
  }

  if (!selectedRecipe) return null

  return (
    <Modal
      open={Boolean(selectedRecipe)}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="200"
            image={selectedRecipe.image}
            alt={selectedRecipe.name}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedRecipe.name}
          </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {selectedRecipe.instructions}
          </Typography> 
        <button className='remove-btn' 
        onClick={(e) => {
        e.stopPropagation();
        handleClose();
        }}
        style={{
            position: 'absolute',
            buttom: 20,
            right: 10,
            border: 'none',
            background: 'transparent',
            color: 'red',
            fontSize: '2rem',
            cursor: 'pointer',
        }}>
        x
        </button>
        </CardContent>
        </Card>        
      </Box>
    </Modal>
  )
}