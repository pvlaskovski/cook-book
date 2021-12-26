import ButtonHover from "./ButtonHover";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";

function InputIngredient({
    index,
    handleDeleteClick,
    item,
    handleItemsChange
}) {

    return (
        <Container className="ingredientContainer">

            <Container className="buttonContainer">
                <ButtonHover
                    index={index}
                    handleDeleteClick={handleDeleteClick}
                />
            </Container>

            <Container className="inputFields">
                <TextField
                    required
                    name="ingredient"
                    value={item.ingredient}
                    label="Ingredient"
                    onChange={e => handleItemsChange(e, index)}
                    className="insertIngredient"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    name="quantity"
                    value={item.quantity}
                    label="Quantity"
                    onChange={e => handleItemsChange(e, index)}
                    className="insertIngredient"
                    variant="outlined"
                    fullWidth
                />

            </Container>
        </Container>
    )
}

export default InputIngredient;