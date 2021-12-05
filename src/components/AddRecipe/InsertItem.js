import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertItem(props) {
    const [itemsList, setItemsList] = useState([{
        ingredient: "",
        quantity: "",
    }]);

    const handleAddClick = function () {
        setItemsList([...itemsList, { item: "", quantity: "" }]);
    }

    const handleDeleteClick = function(index){
        let newItemsList = itemsList.slice();
        newItemsList.pop(index);
        setItemsList(newItemsList);
    }

    const handleItemsChange = function (e, index) {
        const { name, value } = e.target;
        const newItemsList = [...itemsList];

        newItemsList[index][name] = value;
        setItemsList(newItemsList);
        props.getItems(itemsList);
    }


    const renderItems = function () {
        return itemsList.map((ingredient, index) => {
            console.log(itemsList);
            return(
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
                        onChange={e => handleItemsChange(e, index)}
                        fullWidth
                    />
                    <TextField
                        className="insertIngredient"
                        label="Quantity"
                        name="quantity"
                        variant="outlined"
                        onChange={e => handleItemsChange(e, index)}
                        fullWidth
                    />
                </>
            )
        })
    }

    return(
        <>
            {renderItems()}
            <Button className="addItem "variant="outlined" onClick={handleAddClick}>Add Item</Button>
        </>
    )


}

export default InsertItem;