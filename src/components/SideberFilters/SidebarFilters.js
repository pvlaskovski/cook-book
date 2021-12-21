import {FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { Box } from '@mui/system';

import './SidebarFilters.css';

function SidebarFilters() {
    return (
        <Box className="sidebarFilters">
            <FormLabel component ="h2">Recepie types</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Soups" />
                <FormControlLabel control={<Checkbox />} label="Deserts" />
                <FormControlLabel control={<Checkbox />} label="Main" />
            </FormGroup>

            <FormLabel component ="h2">Recepie difficulty</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Easy" />
                <FormControlLabel control={<Checkbox />} label="Medium" />
                <FormControlLabel control={<Checkbox />} label="Hard" />
            </FormGroup>
        </Box>
    )
}


export default SidebarFilters;