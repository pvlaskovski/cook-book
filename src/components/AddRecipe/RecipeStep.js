import { Container, TextField } from "@mui/material";
import ButtonHover from "./ButtonHover";

import uniqueId from "../../services/uniqueId";

function RecipeStep() {
    return (
        <Container key={uniqueId()}>
            <ButtonHover
            // index={index}
            // handleDeleteClick={handleDeleteClick}
            >
                {/* {index + 1} */}

            </ButtonHover>

            <TextField
                // value={step}
                // onChange={e => handleStepsChange(e, index)}
                className="step"
                label="Step"
                name="step"
                variant="outlined"
                multiline rows={3}
                fullWidth
            />
        </Container>
    )
}

export default RecipeStep;