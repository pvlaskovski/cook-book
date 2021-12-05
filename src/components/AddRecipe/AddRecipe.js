
import { FormControl, InputLabel, Input, FormHelperText, Container, TextField, Select, MenuItem, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';

import firebaseService from '../../services/firebase';

import './AddRecipe.css';
import InsertItem from './InsertItem';
import InsertStep from './InsertMethod';

function AddRecipe() {

    const [age, setAge] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleTypeChange = (e) => {
        setAge(e.target.value)
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value)
    };

    const submitRecipe = function(){
        console.log("click submit");
        firebaseService.addRecipe();
    }

    const getAllRecipes = function(){
        console.log("click get");
        firebaseService.getAllRecipes();
    }

    return (

        // TODO: needs abstraction for the select to work with any input

        <Container className="container">
            <Typography>Add Recipe</Typography>
            <TextField id="outlined-basic" label="Add a Recipe" variant="outlined" fullWidth />

            <Typography>Short Overview</Typography>
            <TextField label="Add overview" variant="outlined" fullWidth  multiline rows={2} />


            <Container className="selectContainer">
                <FormControl className="select" >
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type-select"
                        label="Type"
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="Soups">Soups</MenuItem>
                        <MenuItem value="Deserts">Deserts</MenuItem>
                        <MenuItem value="Main">Main</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="select" >
                    <InputLabel id="difficulty">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty"
                        id="difficulty-select"
                        value={difficulty}
                        label="Difficulty"
                        onChange={handleDifficultyChange}
                    >
                        <MenuItem value="Soups">Easy</MenuItem>
                        <MenuItem value="Deserts">Medium</MenuItem>
                        <MenuItem value="Main">Hard</MenuItem>
                    </Select>
                </FormControl>
            </Container>

            <Typography component="p">Add Ingredient</Typography>
            <Container className="ingredientsContainer">
                <InsertItem/>
            </Container>

            <Typography component="p">Add Steps</Typography>
            <Container className="methodContainer">
                <InsertStep/>
            </Container>

            <Container className="methodContainer">
                <TextField id="outlined-basic" label="Image Url" variant="outlined" fullWidth />
            </Container>

            <Button variant="contained" onClick={submitRecipe}>Submit</Button>

        </Container>

    )
}

export default AddRecipe;