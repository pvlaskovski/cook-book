import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertStep() {

    const [stepsList, setStepsList] = useState(["",""]);

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

    const handleStepsChange = function (e, index) {
        const step = e.target.value;
        
        const newStepsList = stepsList.slice();

        newStepsList[index] = step;
        setStepsList(newStepsList);

    }

    const renderSteps = function () {
        console.log(stepsList);

        return stepsList.map((step, index) => {

            return(
                <>
                    <ButtonHover 
                        index={index}
                        handleDeleteClick={handleDeleteClick}
                    >   
                        {index}
                    </ButtonHover>
                    <TextField className=""
                        label="Step"
                        name="step"
                        variant="outlined"
                        defaultValue=""
                        onChange={e => handleStepsChange(e, index)}
                        multiline rows={4}
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