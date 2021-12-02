
import { FormControl, InputLabel, Input, FormHelperText, Container, TextField, Select, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';

import './AddRecipe.css';
import InsertItem from './InsertItem';

function AddRecipe() {

    const [age, setAge] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleTypeChange = (e) => {
        setAge(e.target.value)
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value)
    };

    return (

        // TODO: needs abstraction for the select to work with any input

        <Container className="container">
            <h2>Add Recipe</h2>
            <TextField id="outlined-basic" label="Add a Recipe" variant="outlined" fullWidth />

            <Container className="selectContainer">
                <FormControl className="select" >
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type-select"
                        value={age}
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

            <Container className="selectContainer">
                <InsertItem/>
                {/* <Button>Add Item</Button> */}

            </Container>




        </Container>

    )
}

export default AddRecipe;