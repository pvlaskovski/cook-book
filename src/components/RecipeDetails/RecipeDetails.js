import { Box, width } from "@mui/system";
import { Container, Paper } from "@mui/material";

import './RecipeDetails.css';
import CustomRating from "../CustomRating/CustomRating";

function RecipeDetails() {
    return (

        <Paper className="paper" >
            <h2>Name of the recepie</h2>
            <span>Author and date and time</span>

            <Container className="container">

                <Box className="containerSection">
                    <p>Ingredients</p>
                    <ul>
                        <li>500 gr beef</li>
                        <li>2 tablespoons Dijon mustard (optional)</li>
                        <li>1 large egg (free-range)</li>
                        <li>1 round lettuce</li>
                        <li>1 beef tomato</li>
                    </ul>
                </Box>


                <Box className="containerSection">
                    <p>Steps</p>
                    <ol>
                        <li>Using a bowl, mix the minced beef and mustard.</li>
                        <li>Crack the egg into the bowl, then add a good pinch of sea salt and black pepper.</li>
                        <li>With clean hands, scrunch and mix everything up well. Divide into 6 and pat and mould each piece into a roundish shape, roughly 2cm thick.</li>
                        <li>Place the burgers onto a plate, drizzle with oil, then cover and place in the fridge until needed – this will help to firm them up.</li>
                        <li>To cook the burgers, preheat a large griddle or frying pan for 4 minutes on a high heat, then turn the heat down to medium.</li>
                    </ol>
                </Box>

            </Container>
           
      
            <CustomRating />
          
            
        </Paper>

    )
}

export default RecipeDetails;