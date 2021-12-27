import { Box } from "@mui/system";
import { Container, Paper, Button, Grid, Typography, CircularProgress, List } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';

import { useAuthContext } from "../../contexts/AuthContext";

import { useState, } from "react";
import './RecipeDetails.css';
import AlertDialog from "../Common/AlertDialog";
import firebaseService from "../../services/firebase";

import { useParams, useNavigate, Link } from "react-router-dom";

import { useEffect } from "react";
import toast from "react-hot-toast";
import AddComment from "./AddComment";
import Comment from "./Comment";

function RecipeDetails() {
    const [favourite, setFavourite] = useState(false);
    const [commentAdded, setCommentAdded] = useState(false);
    const [recipe, setRecipe] = useState();
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    let { recipeId } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        firebaseService.getRecipeById(recipeId)
            .then(res => {
                setRecipe(res);
            })
    }, [recipeId, commentAdded]);

    function handleAddedComment() {
        setCommentAdded(!commentAdded);
    }

    function handleFavouriteClick() {
        setFavourite(!favourite);
    }

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
            recipe.recipeSteps.map((step, index) => {
                return (
                    <li key={index}>{step}</li>
                )
            })
        )
    };

    function renderActionIcons() {
        let isAuthor = recipe.userUid == user.uid;
        let isLogged = user.uid != "";

        if (isAuthor) {
            return (
                <>
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
                </>
            )
        } else if (isLogged) {
            return (
                <Avatar className="avatar">
                    <Button className="favButton" onClick={handleFavouriteClick}>
                        {
                            favourite
                                ? <FavoriteIcon className="icon" />
                                : <FavoriteBorderIcon className="icon" />
                        }
                    </Button>
                </Avatar>
            )
        }

        return null;

    }

    function renderRecipes() {
        return (
            <Paper className="paper" >
                <AlertDialog
                    open={open}
                    handleClose={handleModalClose}
                    handleDelete={handleDelete}
                />

                <Box className="topAvatarsContainer">
                    <Box className="avatarsContainer">

                        {renderActionIcons()}

                    </Box>
                </Box>

                <Typography variant="h5" align="center" component="h2">{recipe ? recipe.recipeName : null}</Typography>

                <Typography>{recipe ? recipe.recipeSummary : null}</Typography>
                <Container className="container">
                    <Box className="containerSection">
                        <Typography>Ingredients</Typography>
                        <ul>
                            {recipe ? renderIngredients() : null}
                        </ul>
                    </Box>
                    <Box className="containerSection">
                        <Typography>Steps</Typography>
                        <ol>
                            {recipe ? renderSteps() : null}
                        </ol>
                    </Box>

                    <Box className="imageContainer">
                        <img className="image" alt={recipe ? recipe.recipeName : "Recipe"} src={recipe ? recipe.recipeImageUrl : null} />
                    </Box>

                </Container>

                {(recipe && user.uid)
                    ? <AddComment recipeId={recipeId} handleAddedComment={handleAddedComment} />
                    : null
                }

            </Paper>
        )
    }

    function renderComments() {
        return (
            <Container>

                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Comments
                        </Typography>
                    </Grid>
                </Grid>

                <List>
                    {recipe
                        ? recipe.recipeComments?.map((comment, index) => <Comment key={index} comment={comment} />)
                        : null
                    }
                </List>
            </Container>
        )
    }

    return (
        <Box>
            {recipe
                ? renderRecipes()
                : <Typography align="center" sx={{ mt: 5 }}><CircularProgress /></Typography>
            }

            {recipe
                ? renderComments()
                : null
            }
        </Box>
    )
}

export default RecipeDetails;