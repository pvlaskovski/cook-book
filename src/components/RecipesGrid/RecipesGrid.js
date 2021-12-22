import { Grid } from '@mui/material';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesGrid.css';
import firebaseService from '../../services/firebase';
import { useEffect, useState } from 'react';

function RecipesGrid(
    { recipes, searchWord }
) {

    function renderRecipes() {
        if (recipes.length > 1) {

            if (searchWord.length > 1) {
                recipes = recipes.filter(r => {
                    let recipeName = r.recipe.recipeName.toLowerCase();
                    return recipeName.includes(searchWord);
                });
            }

            return (
                recipes.map(recipe => {
                    let recipeId = recipe.id;
                    let recipeDetails = recipe.recipe;
                    return (
                        <Grid item xs={12} sm={6} md={3} key={recipeId}>
                            <RecipeCard className="recipeContainer" recipeId={recipeId} recipe={recipeDetails} />
                        </Grid>
                    )
                })
            )
        }
    }

    return (
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