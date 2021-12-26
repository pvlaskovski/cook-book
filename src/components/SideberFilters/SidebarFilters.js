import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { Box } from '@mui/system';

import './SidebarFilters.css';

function SidebarFilters({
    handleGroupChange
}) {

    return (
        <Box className="sidebarFilters">
            <FormLabel component="h2">Recipe types</FormLabel>
            <FormGroup
                onChange={(e)=> handleGroupChange(e, "type")}
            >
                <FormControlLabel
                    control={<Checkbox />}
                    label="Soups"
                    name="soups"
                />
                <FormControlLabel 
                    control={<Checkbox />} 
                    label="Deserts"
                    name="deserts"
                />
                <FormControlLabel 
                    control={<Checkbox />} 
                    label="Main" 
                    name="main"
                />
            </FormGroup>

            <FormLabel component="h2">Recipe difficulty</FormLabel>

            <FormGroup 
                onChange={(e)=> handleGroupChange(e, "difficulty")}
            >
                <FormControlLabel control={<Checkbox />} label="Easy" name="easy" />
                <FormControlLabel control={<Checkbox />} label="Medium" name="medium" />
                <FormControlLabel control={<Checkbox />} label="Hard" name="hard"/>
            </FormGroup>
        </Box>
    )
}


export default SidebarFilters;