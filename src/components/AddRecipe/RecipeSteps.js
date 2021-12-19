import { Container, TextField } from "@mui/material";
import ButtonHover from "./ButtonHover";
import RecipeStep from "./RecipeStep";

import uniqueId from "../../services/uniqueId";
import { useState } from "react";

function RecipeSteps() {
    const [steps, setSteps] = useState(Array(3));    
    
    return (
        <>
            {steps.map((step) => (
                <p>Test</p>
            ))}
        </>
    )
}

export default RecipeSteps;