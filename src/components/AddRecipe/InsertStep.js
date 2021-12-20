import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import ButtonHover from './ButtonHover.js';

function InsertStep(props) {

    const [stepsList, setStepsList] = useState(props.steps || Array(3).fill(null));

    const handleAddClick = function () {
        let newList = stepsList.slice();
        newList.push("");
        setStepsList(newList);
    }

    const handleStepsChange = function (e, index) {
        let newValue = e.target.value;
        let newStepsList = stepsList.slice();
        newStepsList[index] = newValue;
        setStepsList(newStepsList);
    }

    const handleDeleteClick = function(index){
        if(stepsList.length>1){
            const list = [...stepsList];
            list.splice(index, 1);
            setStepsList(list);
        }
    }

    const renderSteps = function () {
        console.log(stepsList);
        return stepsList.map((step, index) => {
        
            return(
                <Container key={index.toString()}>
                    <ButtonHover 
                        index={index}
                        handleDeleteClick={handleDeleteClick}
                    >   
                        {index + 1}
                    </ButtonHover>

                    <TextField 
                        value={step}
                        onChange={e => handleStepsChange(e, index)}
                        className="step"
                        label="Step"
                        name="step"
                        variant="outlined"
                        multiline rows={3}
                        fullWidth
                    />
                </Container>
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