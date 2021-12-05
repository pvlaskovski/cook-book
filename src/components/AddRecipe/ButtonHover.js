import { Button } from "@mui/material";
import { useState } from "react";

export default function ButtonHover(props){
    const [isHovered, setIsHovered] = useState(false);

    
    return(
        <Button 
            onClick={()=>props.handleDeleteClick(props.index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            { isHovered? 'X' : props.children}
        </Button>
    )
}