import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertItem() {

    const [itemsList, setItemsList] = useState([{
        item: "",
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

    }

    const renderItems = function () {
        return itemsList.map((ingredient, index) => {

            return(
                <>
                    <ButtonHover 
                        index={index}
                        handleDeleteClick={handleDeleteClick}
                    >   
                        {index}
                    </ButtonHover>
                    <TextField className=""
                        label="item"
                        name="item"
                        variant="outlined"
                        onChange={e => handleItemsChange(e, index)}
                        fullWidth
                    />
                    <TextField
                        className=""
                        label="quantity"
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
            <Button onClick={handleAddClick}>Add Item</Button>
        </>
    )


}

export default InsertItem;