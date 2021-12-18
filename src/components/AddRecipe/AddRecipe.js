import { FormControl, InputLabel, Input, FormHelperText, Container, TextField, Select, MenuItem, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import firebaseService from '../../services/firebase';

import './AddRecipe.css';
import InsertItem from './InsertItem';
import InsertStep from './InsertMethod';

import parseIngredients from '../../helpers/parseIngredients';

function AddRecipe() {
    const {user} = useAuthContext();
    let navigate = useNavigate();

    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleTypeChange = (e) => {
        setType(e.target.value);
        // console.log(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
        console.log(e.target.value);
    };

    const submitRecipe = function(){
        console.log("click submit");
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

        console.log(recipe);
        try {
            firebaseService.addRecipe(recipe);
            navigate('/');
        } catch (error) {
            
        }
    }
    

    return (

        // TODO: needs abstraction for the select to work with any input
        <Container className="container" component="form">
            <Typography>Add Recipe</Typography>
            <TextField id="outlined-basic" label="Add a Recipe" variant="outlined" fullWidth name="recipeName"/>

            <Typography>Short Overview</Typography>
            <TextField label="Add overview" variant="outlined" fullWidth multiline rows={2} name="recipeOverview" />


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

            <Typography component="p">Add Ingredient</Typography>
            <Container className="ingredientsContainer">
                <InsertItem />
            </Container>

            <Typography component="p">Add Steps</Typography>
            <Container className="methodContainer">
                <InsertStep/>
            </Container>

            <Container className="methodContainer">
                <TextField id="outlined-basic" label="Image Url" variant="outlined" name="imgUrl" fullWidth />
            </Container>

            <Button variant="contained" onClick={submitRecipe}>Submit</Button>

        </Container>
        

    )
}

export default AddRecipe;