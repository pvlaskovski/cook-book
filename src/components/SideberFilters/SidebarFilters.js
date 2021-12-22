import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

import './SidebarFilters.css';

function SidebarFilters() {

    const [typeFilters, setTypeFilters] = useState([]);
    const [difficultyFilters, setDifficultyFilters] = useState([]); 

    const handleChange = (event) => {
        let filter = event.target.name;
        let isChecked = event.target.checked;
        console.log({filter, isChecked});
    };

    const handleGroupChange = (event, group)=>{
        let checkboxGroup = group;
        let checkboxName = event.target.name;
        let checkboxIsChecked = Boolean(event.target.checked);

        if (checkboxGroup == "type") {

            if (checkboxIsChecked) {
                setTypeFilters(typeFilters => (
                    [...typeFilters, checkboxName]
                ));

            }else{
                setTypeFilters(typeFilters => (
                    typeFilters.filter(x => x !== checkboxName)
                ));
            }
        
            console.log(typeFilters);

        }else if( checkboxGroup == "difficulty"){
            if (checkboxIsChecked) {
                setDifficultyFilters(difficultyFilters => (
                    [...difficultyFilters, checkboxName]
                ));
            }else{
                setDifficultyFilters(difficultyFilters => (
                    difficultyFilters.filter(x => x !== checkboxName)
                ));
            }
        }    
    }

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