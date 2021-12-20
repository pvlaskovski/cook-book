import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertIngredients(props) {

    const [itemsList, setItemsList] = useState(
        [
            {
                ingredient: "",
                quantity: "",
            },
            {
                ingredient: "",
                quantity: "",
            },
            {
                ingredient: "",
                quantity: "",
            }
        ]
    );

    const handleAddClick = function () {
        setItemsList([...itemsList, { ingredient: "", quantity: "" }]);
    };

    const handleItemsChange = function (e, index) {
        const { name, value } = e.target;
        const list = [...itemsList];
        list[index][name] = value;
        setItemsList(list);
    };

    const handleDeleteClick = function (index) {
        if (itemsList.length > 1) {
            const list = [...itemsList];
            list.splice(index, 1);
            setItemsList(list);
        };
    };

    return (
        <Container>
            {itemsList.map((x,i)=>{
                return(
                    <>
                        <ButtonHover 
                            index={i}
                            handleDeleteClick={handleDeleteClick}
                        />

                        <TextField
                            name="ingredient"
                            value={x.ingredient}
                            label="Ingredient"
                            onChange={e => handleItemsChange(e, i)}
                            className="insertIngredient"
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            name="quantity"
                            value={x.quantity}
                            label="Quantity"
                            onChange={e => handleItemsChange(e, i)}
                            className="insertIngredient"
                            variant="outlined"
                            fullWidth
                        />
                    </>
                    
                )
            })}

            <Button className="addItem " variant="outlined" onClick={handleAddClick}>Add Item</Button>
        </Container>
    )


}

export default InsertIngredients;