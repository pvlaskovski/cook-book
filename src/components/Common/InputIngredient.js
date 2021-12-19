import ButtonHover from "../AddRecipe/ButtonHover";
import { TextField, Button } from "@mui/material";

export default function InputIngredient(
    index,
    handleDeleteClick,
) {
    return (
        <>
            <Button onClick={handleDeleteClick}>Test btn</Button>

            <ButtonHover
                index={index}
                onClick={handleDeleteClick}
            >
                test
            </ButtonHover>

            <TextField className="insertIngredient"
                label="Ingredient"
                name="ingredient"
                variant="outlined"
                fullWidth
            />

            <TextField
                className="insertIngredient"
                label="Quantity"
                name="ingredient"
                variant="outlined"
                fullWidth
            />
        </>
    )
}