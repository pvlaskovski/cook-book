import { Box } from "@mui/system";
import { Container, Paper, Button, Grid, Typography, ListItem, ListItemAvatar, ListItemText, Divider, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';


import { useState, } from "react";
import './RecipeDetails.css';
import CustomRating from "../CustomRating/CustomRating";
import AlertDialog from "../Common/AlertDialog";
import firebaseService from "../../services/firebase";

import { useParams, useNavigate, Link } from "react-router-dom";

import { useEffect } from "react";
import toast from "react-hot-toast";
import AddComment from "./AddComment";

function RecipeDetails() {
    const [favourite, setFavourite] = useState(false);
    const [recipe, setRecipe] = useState();
    const [open, setOpen] = useState();

    const navigate = useNavigate();
    let { recipeId } = useParams();

    useEffect(() => {
        firebaseService.getRecipeById(recipeId)
            .then(res => {
                setRecipe(res);
            })
    }, []);

    function handleFavouriteClick() {
        setFavourite(!favourite);
    }

    function renderIngredients() {
        return (
            recipe.recipeIngredients.map(i => {
                let ingredient = i.ingredient;
                let quantity = i.quantity;
                return (
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
    };

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        if (open) {
            try {
                firebaseService.deleteRecipeById(recipeId);
                toast.success('Successfully deleted recipe');
                navigate('/');
            } catch (error) {
                toast.error("Unable to delete recipe");
            }
        }
        setOpen(false);
    };

   

    function getRating (rating) {
        console.log(rating);
    }

    return (
        <Box>

            <Paper className="paper" >

                <AlertDialog
                    open={open}
                    handleClose={handleModalClose}
                    handleDelete={handleDelete}
                />

                <Box className="topAvatarsContainer">
                    <Box className="avatarsContainer">
                        <Avatar className="avatar">
                            <Button className="editButton" component={Link} to="edit">
                                <EditIcon />
                            </Button>
                        </Avatar>

                        <Avatar className="avatar">
                            <Button className="deleteButton" onClick={handleModalOpen}>
                                <DeleteIcon />
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
                        <img className="image" src={recipe ? recipe.recipeImageUrl : null} />
                    </Box>

                </Container>

                 {recipe 
                    ? <AddComment recipe={recipe} recipeId={recipeId}/>
                    : null
                }                   

            </Paper>

            <Container>

                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Comments
                        </Typography>
                    </Grid>
                </Grid>

                {/* Comment start */}

                <ListItem key={""} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="avatar" src={""} />
                    </ListItemAvatar>

                    <ListItemText
                        primary={
                            <Typography >
                                Author name
                            </Typography>
                        }
                        secondary={
                            <>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt odio massa, nec aliquam urna fringilla ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam orci odio, ullamcorper id dictum et, bibendum quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse felis nulla, fermentum vitae elit a, blandit condimentum nunc.
                                </Typography>
                                <CustomRating />
                            </>
                        }
                    />
                </ListItem>
                <Divider />

                {/* Comment end */}


            </Container>

        </Box>
    )
}

export default RecipeDetails;