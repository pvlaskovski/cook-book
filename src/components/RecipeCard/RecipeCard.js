import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';

function RecipeCard({recipeId, recipe}) {

    return (
        <Card>
            <CardActionArea component={RouterLink} to={`recipe/${recipeId}`}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title={(recipe.recipeName)? recipe.recipeName : 'No name'}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={recipe.recipeImageUrl}
                        alt={recipe.recipeName}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {recipe.recipeSummary}
                        </Typography>
                    </CardContent>     
            </CardActionArea>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}

export default RecipeCard;