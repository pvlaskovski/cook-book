import { Button } from "@mui/material";
import { useState } from "react";

export default function ButtonHover({
    index,
    handleDeleteClick
}){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <Button 
            onClick={()=>handleDeleteClick(index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            { isHovered? 'X' : index + 1}
        </Button>
    )
}