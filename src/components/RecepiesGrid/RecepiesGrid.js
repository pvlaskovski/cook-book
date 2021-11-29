import { Grid } from '@mui/material';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecepiesGrid() {
    return (
        <Grid container maxWidth="100%" spacing={1}>

            <Grid item xs={12} sm={6} md={3}>
                <RecipeCard/>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <RecipeCard/>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <RecipeCard/>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <RecipeCard/>
            </Grid>

        </Grid>
    )
}

export default RecepiesGrid;