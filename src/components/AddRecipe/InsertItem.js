import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from '../Common/ButtonHover.js';
import InputIngredient from "../Common/InputIngredient.js";

function InsertItem(props) {

    const [itemsList, setItemsList] = useState(Array(3).fill(
        {
            ingredient: "",
            quantity: "",
        }
    ))

const handleAddClick = function () {
    setItemsList([...itemsList, { item: "", quantity: "" }]);
}

const handleDeleteClick = function(index) {
    let newItemsList = itemsList.slice();
    newItemsList.pop(index);
    setItemsList(newItemsList);
}

const renderItems = function () {
    return itemsList.map((ingredient, index) => {
        return (

            <>
                <ButtonHover
                    index={index}
                    handleDeleteClick={handleDeleteClick}
                >
                    {index + 1}
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
    })
}

return (
    <>
        {renderItems()}
        <Button className="addItem " variant="outlined" onClick={handleAddClick}>Add Item</Button>
    </>
)


}

export default InsertItem;