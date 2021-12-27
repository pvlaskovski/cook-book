import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import toast from 'react-hot-toast';



function RecipeCard({recipeId, recipe}) {

    function copyLink(){
        let link = window.location.href + "recipe/" + recipeId;
        navigator.clipboard.writeText(link);
        toast.success("Link copied");
    }

    return (
        <Card className="recipeContainer">
            <CardActionArea component={RouterLink} to={`recipe/${recipeId}`}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title={(recipe.recipeName)? recipe.recipeName : 'No name'}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={recipe.recipeImageUrl}
                        alt={recipe.recipeName}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {recipe.recipeSummary.substring(0,120)}
                        </Typography>
                    </CardContent>     
            </CardActionArea>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>

                <IconButton 
                    aria-label="share"
                    onClick={copyLink}
                >
                    <ShareIcon/>
                </IconButton>

            </CardActions>

        </Card>
    );
}

export default RecipeCard;