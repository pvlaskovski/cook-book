import { useState } from "react";
import { Button, Container, Typography, Divider } from "@mui/material";
import InputIngredient from "./InputIngredient.js";

function InsertIngredients(props) {

    const [itemsList, setItemsList] = useState( props.ingredients ||  [
        {
            ingredient: "",
            quantity: "",
        },
        {
            ingredient: "",
            quantity: "",
        } 
    ]);

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
                        key={i}
                        index={i}
                        handleDeleteClick={handleDeleteClick}
                        item={x}
                        handleItemsChange={handleItemsChange}
                    />
                )
            })}

            <Typography align="left">
                <Button className="addItem " variant="outlined" onClick={handleAddClick}>Add Item</Button>
            </Typography>
            <Divider sx={{mt: 1}}/>
            
        </Container>
    )

}

export default InsertIngredients;