import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import ButtonHover from './ButtonHover.js';
import InputIngredient from "./InputIngredient.js";

function InsertIngredients(props) {

    const [itemsList, setItemsList] = useState( props.ingredients ||
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

    return(
        <Container>
            {itemsList.map((x,i)=>{
                return(
                    <InputIngredient
                        index={i}
                        handleDeleteClick={handleDeleteClick}
                        item={x}
                        handleItemsChange={handleItemsChange}
                    />
                )
            })}
            <Button className="addItem " variant="outlined" onClick={handleAddClick}>Add Item</Button>
        </Container>
    )

}

export default InsertIngredients;