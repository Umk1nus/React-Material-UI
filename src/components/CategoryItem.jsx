import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

function CategoryItem(props) {
  const {strMeal, strMealThumb, idMeal} = props 

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/meal/${idMeal}`}>Learn</Link></Button>
      </CardActions>
    </Card>
  )
}

export {CategoryItem}