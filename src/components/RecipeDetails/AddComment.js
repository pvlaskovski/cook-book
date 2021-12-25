import { Container, TextField, Button } from "@mui/material";
import CustomRating from "../CustomRating/CustomRating";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import firebaseService from "../../services/firebase";
import toast from "react-hot-toast";
import userService from "../../services/userService";

export default function AddComment({
    recipeId
}) {
    const [value, setValue] = useState(3);
    const { user } = useAuthContext();
    let navigate = useNavigate();

    const handleAddCommentClick = async() => {
        let formData = new FormData(document.querySelector('form'));
        let rating = value;
        let comment = formData.get("comment");

        if (rating == null) {
            rating = 0;
        }

        let author = await userService.getUserById(user.uid);
        let authorName = author.firstName + " " + author.lastName;

        try {
            firebaseService.addComment(recipeId, {authorName, comment, rating});
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