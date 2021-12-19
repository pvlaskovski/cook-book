import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from './ButtonHover.js';

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

const handleItemsChange = function (e, index) {
    console.log(e.target.key);
    const { key, value } = e.target;
    const newItemsList = [...itemsList];
    newItemsList[index][key] = value;
    setItemsList(newItemsList);
    console.log(newItemsList);
}

const handleDeleteClick = function(index) {
    // console.log("This is the index we are deleting -> "  +index);

    let newItemsList = itemsList.slice();
    newItemsList.pop(index);

    // console.log('Old items list -> ' + newItemsList);

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
                <TextField 
                    onChange={e => handleItemsChange(e, index)}
                    id={ingredient.ingredient}
                    className="insertIngredient"
                    label="Ingredient"
                    name="ingredient"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    onChange={e => handleItemsChange(e, index)}
                    id={ingredient.quantity}
                    className="insertIngredient"
                    label="Quantity"
                    name="quantity"
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