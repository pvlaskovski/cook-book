import {FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { Box } from '@mui/system';

import './SidebarFilters.css';

function SidebarFilters() {
    return (
        <Box className="sidebarFilters">
            <FormLabel component ="h2">Recepie types</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Filter 1" />
                <FormControlLabel control={<Checkbox />} label="Filter 2" />
                <FormControlLabel control={<Checkbox />} label="Filter 3" />
                <FormControlLabel control={<Checkbox />} label="Filter 4" />
                <FormControlLabel control={<Checkbox />} label="Filter 4" />
                <FormControlLabel control={<Checkbox />} label="Filter 4" />
            </FormGroup>
        </Box>
    )
}


export default SidebarFilters;