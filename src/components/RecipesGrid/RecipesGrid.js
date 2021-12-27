import { Grid } from '@mui/material';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesGrid.css';

function RecipesGrid({
    recipes,
    searchWord,
    typeFilters,
    difficultyFilters
}) {
    
    function renderRecipes() {
        if (recipes.length > 1) {

            if (searchWord.length > 1) {
                recipes = recipes.filter(r => {
                    let recipeName = r.recipe.recipeName.toLowerCase();
                    return recipeName.includes(searchWord);
                });
            }

            if (typeFilters.length > 0) {
                recipes = recipes.filter(r => {
                    let recipeType = r.recipe.recipeType.toLowerCase();
                    return typeFilters.includes(recipeType);
                });
            }

            if (difficultyFilters.length > 0) {
                recipes = recipes.filter(r => {
                    let recipeDifficulty = r.recipe.recipeDifficulty.toLowerCase();
                    return difficultyFilters.includes(recipeDifficulty);
                });
            }

            return (
                recipes.map(recipe => {
                    let recipeId = recipe.id;
                    let recipeDetails = recipe.recipe;
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={recipeId}>
                            <RecipeCard recipeId={recipeId} recipe={recipeDetails} />
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