import { Container, TextField, Button } from "@mui/material";
import CustomRating from "../CustomRating/CustomRating";

import { useState } from "react";

import firebaseService from "../../services/firebase";

export default function AddComment({
    recipe,
    recipeId
}) {
    const [value, setValue] = useState(3);

    const handleAddCommentClick = () => {
        let formData = new FormData(document.querySelector('form'));
        let rating = value;
        let comment = formData.get("comment");

        if (rating == null) {
            rating = 0;
        }

        let recipeComments;
        try {
            recipeComments = recipe.recipeComments;
            console.log("PRE ADDING: " + recipeComments);
            recipeComments = recipeComments.push({comment, rating});
        } catch (error) {
            recipeComments = [{comment, rating}];
        }
        
        

        try {
            // firebaseService.updateRecipe(recipeId, {...recipe, recipeComments}).then(res => console.log(res));
            firebaseService.addComment(recipeId, {comment, rating});
            console.log("Commented");
        } catch (error) {
            console.log("Unable to add comment");
        }

    };

    const updateRatingValue  = (newValue) =>{
        setValue(newValue);
    }

    return (
        <Container  component="form">
            <TextField
                label="Add comment"
                name="comment"
                variant="outlined"
                multiline rows={2}
                fullWidth
            />
            <CustomRating 
                value={value}
                updateRatingValue={updateRatingValue}
            />

            <Button variant="outlined" onClick={handleAddCommentClick}>Add comment</Button>
        </Container>
    )
}