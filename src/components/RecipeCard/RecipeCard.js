import * as React from 'react';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';

function RecipeCard({recipe}) {

    return (
        <Card>
            <CardActionArea>
                
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title={(recipe.recipeName)? recipe.recipeName : 'No name'}
                    // title="Some Title"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={recipe.imgUrl}
                    alt={recipe.recipeName}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {/* To add short description to the add recipe input */}
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
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