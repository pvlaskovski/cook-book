import { useState } from "react";
import { TextField, Button } from "@mui/material";

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
                    <TextField className="select"
                        id={ingredient.item}
                        label="Item"
                        variant="outlined"
                        onChange={e => handleItemsChange(e, index)}
                        fullWidth
                    />
                    <TextField
                        className="select"
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