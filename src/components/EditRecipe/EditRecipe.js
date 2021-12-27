import { FormControl, InputLabel, Container, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import firebaseService from '../../services/firebase';

import '../AddRecipe/AddRecipe.css';
import InsertIngredients from '../AddRecipe/InsertIngredients';
import InsertStep from '../AddRecipe/InsertStep';

import parseIngredients from '../../helpers/parseIngredients';

function EditRecipe(props) {

    const {user} = useAuthContext();
    let { recipeId } = useParams();
    let navigate = useNavigate();

    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [recipe, setRecipe] = useState({});
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [imgUrl, setImgUrl] = useState("");


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

        let recipeIngredientsNames = formData.getAll('ingredient');
        let recipeIngredientsQuantities = formData.getAll('quantity');
        let recipeIngredients = parseIngredients(recipeIngredientsNames, recipeIngredientsQuantities);

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
            firebaseService.updateRecipe(recipeId, recipe);
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
                setTitle(res.recipeName);
                setSummary(res.recipeSummary);
                setImgUrl(res.recipeImageUrl);
                // console.log("Recipe is loaded:");
                // console.log(res.recipeImageUrl);

            })
    }, [recipeId]);

    return (

        <Container className="container" component="form">

            <Typography>Edit Recipe</Typography>
            <TextField id="outlined-basic" variant="outlined" fullWidth name="recipeName" value={recipe ? title : null} onChange={(e) => setTitle(e.target.value)}/>

            <Typography>Overview</Typography>
            <TextField variant="outlined" fullWidth multiline rows={2} name="recipeOverview" value={recipe ? summary : null} onChange={(e) => setSummary(e.target.value)}/>


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
            {recipe.recipeIngredients
                ?
                    <Container className="ingredientsContainer">
                        <InsertIngredients ingredients={recipe.recipeIngredients}/>
                    </Container>
                : 
                    null
            }
            

            <Typography component="p">Steps</Typography>    
            {recipe.recipeSteps 
                ? 
                    <Container className="methodContainer">
                        <InsertStep steps={recipe.recipeSteps} />
                    </Container> 
                :
                    null
            }

            <Container className="methodContainer">
                <TextField id="outlined-basic" variant="outlined" name="imgUrl" value={recipe ? imgUrl : null} onChange={(e) => setImgUrl(e.target.value)} fullWidth />
            </Container>

            <Button variant="contained" onClick={submitRecipe}>Submit Edit</Button>

        </Container>
        

    )
}

export default EditRecipe;