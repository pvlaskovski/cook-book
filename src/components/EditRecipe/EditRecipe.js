import { FormControl, InputLabel, Input, FormHelperText, Container, TextField, Select, MenuItem, Button, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import firebaseService from '../../services/firebase';

import '../AddRecipe/AddRecipe.css';
import InsertItem from '../AddRecipe/InsertItem';
import InsertStep from '../AddRecipe/InsertStep';

import parseIngredients from '../../helpers/parseIngredients';

function EditRecipe(props) {

    const {user} = useAuthContext();
    let { recipeId } = useParams();
    let navigate = useNavigate();

    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [recipe, setRecipe] = useState({});

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    };

    const submitRecipe = function(){
        let formData = new FormData(document.querySelector('form'));

        let recipeName = formData.get("recipeName");
        let recipeSummary = formData.get("recipeOverview");
        let recipeType = type;
        let recipeDifficulty = difficulty;
        let recipeIngredients = parseIngredients(formData.getAll('ingredient'));
        let recipeSteps = formData.getAll('step');  
        let recipeImageUrl = formData.get('imgUrl');
        
        let recipe = {
            userUid: user.uid,
            recipeName,
            recipeSummary,
            recipeType,
            recipeDifficulty,
            recipeIngredients,
            recipeSteps,
            recipeImageUrl,
        }

        try {
            firebaseService.addRecipe(recipe);
            navigate('/');
        } catch (error) {
            
        }
    }
    
    useEffect(() => {
        firebaseService.getRecipeById(recipeId)
            .then(res=> {
                setRecipe(res);
                setType(res.recipeType);
                setDifficulty(res.recipeDifficulty);
            })
    }, []);

    return (

        // TODO: needs abstraction for the select to work with any input
        <Container className="container" component="form">
            <Typography>Edit Recipe</Typography>
            <TextField id="outlined-basic" variant="outlined" fullWidth name="recipeName" value={recipe ? recipe.recipeName : null}/>

            <Typography>Overview</Typography>
            <TextField variant="outlined" fullWidth multiline rows={2} name="recipeOverview" value={recipe ? recipe.recipeSummary : null} />


            <Container className="selectContainer">
                <FormControl className="select" >
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type-select"
                        label="Type"
                        value={type}
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="Soups">Soups</MenuItem>
                        <MenuItem value="Deserts">Deserts</MenuItem>
                        <MenuItem value="Main">Main</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="select" >
                    <InputLabel id="difficulty" >Difficulty</InputLabel>
                    <Select
                        labelId="difficulty"
                        id="difficulty-select"
                        label="Difficulty"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                    >
                        <MenuItem value="Easy">Easy</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Hard">Hard</MenuItem>
                    </Select>
                </FormControl>
            </Container>

            <Typography component="p">Ingredient</Typography>
            <Container className="ingredientsContainer">
                <InsertItem />
            </Container>

            <Typography component="p">Steps</Typography>
            <Container className="methodContainer">
                <InsertStep/>
            </Container>

            <Container className="methodContainer">
                <TextField id="outlined-basic" variant="outlined" name="imgUrl" value={recipe.recipeImageUrl} fullWidth />
            </Container>

            <Button variant="contained" onClick={submitRecipe}>Submit</Button>

        </Container>
        

    )
}

export default EditRecipe;