import { Grid } from '@mui/material';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesGrid.css';
import firebaseService from '../../services/firebase';
import { useEffect, useState } from 'react';

function RecipesGrid() {
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        firebaseService.getAllRecipes()
            .then(res=> {
                // console.log(res);
                setRecipes(res);
            })  
    }, []);

    function renderRecipes(){
        return(
            recipes.map(recipe=>{
                let recipeId = recipe.id;
                let recipeDetails = recipe.recipe;
                console.log(recipeDetails);
                return(
                    <Grid item xs={12} sm={6} md={3} key={recipeId}>
                        <RecipeCard className="recipeContainer"  recipeId= {recipeId} recipe={recipeDetails} />
                    </Grid>
                )
            })
            
        )
    }

    return(
        // recipes.map(r => <p>{r.id}</p>)
        <Grid
            className='recipesGrid'
            container
            justifyContent="flex-start"
            alignItems="center"
            item spacing={2}
        >
           {renderRecipes()}
        </Grid>
    )
        
        
        
    
}

export default RecipesGrid;