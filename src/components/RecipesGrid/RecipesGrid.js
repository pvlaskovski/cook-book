import { Container, Grid, Typography } from '@mui/material';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesGrid.css';

function RecipesGrid({
    recipes,
    searchWord,
    typeFilters,
    difficultyFilters
}) {

    function renderRecipes() {
        if (recipes.length > 0) {
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

            if (recipes.length > 0) {
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
            } else {
                return (
                    <Container>
                        <Typography align="center" variant='h6' sx={{mt:2}}>No recipes found please try with another search word!</Typography>
                    </Container>
                )
            }
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