import { Container, TextField, Button } from "@mui/material";
import CustomRating from "../CustomRating/CustomRating";

import { useState } from "react";

import firebaseService from "../../services/firebase";
import toast from "react-hot-toast";

export default function AddComment({
    recipe,
    recipeId
}) {
    const [value, setValue] = useState(3);

    const handleAddCommentClick = () => {
        let formData = new FormData(document.querySelector('form'));
        let rating = value;
        let comment = formData.get("comment");
        let author = "";

        if (rating == null) {
            rating = 0;
        }

        try {
            firebaseService.addComment(recipeId, {comment, rating});
            toast.success("Comment added");
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