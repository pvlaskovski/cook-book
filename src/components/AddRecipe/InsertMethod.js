import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from '../Common/ButtonHover.js';

function InsertStep(props) {

    const [stepsList, setStepsList] = useState(Array(3).fill(""));

    const handleAddClick = function () {
        let newList = stepsList.slice();
        newList.push("");
        setStepsList(newList);
    }

    const handleDeleteClick = function(index){
        let newStepssList = stepsList.slice();
        newStepssList.pop(index);
        setStepsList(newStepssList);
    }

    const renderSteps = function () {

        return stepsList.map((step, index) => {

            return(
                <>
                    <ButtonHover 
                        index={index}
                        handleDeleteClick={handleDeleteClick}
                    >   
                        {index + 1}
                    </ButtonHover>
                    <TextField className="step"
                        label="Step"
                        name="step"
                        variant="outlined"
                        defaultValue=""
                        multiline rows={3}
                        fullWidth
                    />
                   
                </>
            )
        })
    }

    return(
        <>
            {renderSteps()}
            <Button className="addItem "variant="outlined" onClick={handleAddClick}>Add Step</Button>
        </>
    )


}

export default InsertStep;