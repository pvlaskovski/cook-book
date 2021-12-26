import { FormControl, InputLabel, Container, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import firebaseService from '../../services/firebase';

import InsertIngredients from './InsertIngredients';
import InsertStep from './InsertStep';

import parseIngredients from '../../helpers/parseIngredients';
import toast from 'react-hot-toast';

function AddRecipe() {
    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const { user } = useAuthContext();
    let navigate = useNavigate();

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    };

    const submitRecipe = async function () {
        let formData = new FormData(document.querySelector('form'));

        let recipeType = type;
        let recipeDifficulty = difficulty;
        let recipeName = formData.get("recipeName");
        let recipeSummary = formData.get("recipeOverview");
        let recipeIngredientsNames = formData.getAll('ingredient');
        let recipeIngredientsQuantities = formData.getAll('quantity');
        let recipeIngredients = parseIngredients(recipeIngredientsNames, recipeIngredientsQuantities);   
        let recipeSteps = formData.getAll('step').filter(s => s !== "");
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
            toast.success(`Added recipe: ${recipeName}`);
            navigate('/');
        } catch (error) {
            toast.error("Unable to add recipe");
        }
    }


    return (

        <Container className="container" component="form" onSubmit={submitRecipe}>

            <Typography component="h1" variant='h5'>Add Recipe</Typography>
            <TextField id="outlined-basic" label="Recipe name" variant="outlined" fullWidth name="recipeName" required />

            <TextField label="Add overview" variant="outlined" fullWidth multiline rows={2} name="recipeOverview" required/>

            <Container className="selectContainer">

                <FormControl className="select" required>
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

                <FormControl className="select" required>
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

            <Typography component="p">Add Ingredients</Typography>
            <Container className="ingredientsContainer">
                <InsertIngredients />
            </Container>

            <Typography component="p">Add Steps</Typography>
            <Container className="stepsContainer">
                <InsertStep />
            </Container>

            <Container className="stepsContainer">
                <TextField id="outlined-basic" label="Image Url" variant="outlined" name="imgUrl" fullWidth />
            </Container>

            <Button variant="contained" type="submit">Submit</Button>

        </Container>
    )
}

export default AddRecipe;