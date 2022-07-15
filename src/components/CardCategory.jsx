import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

function CardCategory(props) {
  const {strCategory, strCategoryDescription, strCategoryThumb} = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={strCategoryThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strCategory}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {strCategoryDescription.slice(0, 80)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/category/${strCategory}`}>Category watch</Link></Button>
      </CardActions>
    </Card>
  );
}

export {CardCategory}