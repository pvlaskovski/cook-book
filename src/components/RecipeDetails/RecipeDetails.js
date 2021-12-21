import { Box } from "@mui/system";
import { Container, Paper, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from "react";
import './RecipeDetails.css';
import CustomRating from "../CustomRating/CustomRating";
import firebaseService from "../../services/firebase";

import { useParams, Link } from "react-router-dom";

import { useEffect } from "react";

function RecipeDetails() {
    const [favourite, setFavourite] = useState(false);
    const [recipe, setRecipe] = useState();

    function handleFavouriteClick (){
        setFavourite(!favourite);
    }

    let { recipeId } = useParams();
    
    useEffect(() => {
        firebaseService.getRecipeById(recipeId)
            .then(res=> {
                setRecipe(res);
                
            })
    }, []);

    function renderIngredients(){
        return(
            recipe.recipeIngredients.map(i=>{
                let ingredient = i.ingredient;
                let quantity = i.quantity;
                return(
                    <li key={ingredient + Date.now()}>{ingredient}: {quantity}</li>
                )
            })
            
        )
    }

    function renderSteps() {
        return (
            recipe.recipeSteps.map(step => {
                return (
                    <li key={step + Date.now()}>{step}</li>
                )
            })
        )
    }

    return (

        <Paper className="paper" >
            <Box className="topAvatarsContainer">
                <Box className="avatarsContainer">
                    <Avatar className="avatar">
                        <Button className="editButton" component={Link} to="edit">
                            <EditIcon/>
                        </Button>
                    </Avatar>

                    <Avatar className="avatar">
                        <Button className="favButton" onClick={handleFavouriteClick}>
                            {
                                favourite
                                    ? <FavoriteIcon className="icon" />
                                    : <FavoriteBorderIcon className="icon" />
                            }
                        </Button>
                    </Avatar> 
                </Box>
            </Box>

            <h2>{recipe ? recipe.recipeName : null}</h2>
            <span>Author and date and time</span>

            <p>{recipe ? recipe.recipeSummary : null}</p>
            <Container className="container">
                <Box className="containerSection">
                    <p>Ingredients</p>
                    <ul>
                        {recipe ? renderIngredients() : null}
                    </ul>
                </Box>
                <Box className="containerSection">
                    <p>Steps</p>
                    <ol>
                        {recipe ? renderSteps() : null}
                    </ol>
                </Box>

                <Box className="imageContainer">
                    <img className="image" src={recipe? recipe.recipeImageUrl : null} />
                </Box>

            </Container>
            <CustomRating />

        </Paper>

    )
}

export default RecipeDetails;