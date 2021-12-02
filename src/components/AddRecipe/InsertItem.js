import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertItem() {

    const [itemsList, setItemsList] = useState([{
        item: "test",
        quantity: "test",
    }]);

    const handleAddClick = function () {
        setItemsList([...itemsList, { item: "", quantity: "" }]);
    }

    const handleItemsChange = function (e, index) {
        const { key, value } = e.target;
        const newItemsList = [...itemsList];
        newItemsList[index][key] = value;
        setItemsList(newItemsList)
    }




    const renderItems = function () {
        return itemsList.map((ingredient, index) => {
            return(
                <>
                    <ButtonHover>   
                        {index}
                    </ButtonHover>
                    <TextField className=""
                        id={ingredient.item}
                        label="Item"
                        variant="outlined"
                        onChange={e => handleItemsChange(e, index)}
                        fullWidth
                    />
                    <TextField
                        className=""
                        id={ingredient.quantity}
                        label="Quantity"
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
            <Button onClick={handleAddClick}>Add Item</Button>
        </>
    )


}

export default InsertItem;