import RecipesGrid from "../RecipesGrid/RecipesGrid";
import SidebarFilters from "../SideberFilters/SidebarFilters";

import { Box } from "@mui/system";
import { TextField } from "@mui/material";


import './Homepage.css';

function Homepage(props){

    return(
        <Box className="homepageMainContainer">
            <TextField id="outlined-search" label="Search recipe" type="search" fullWidth />
            <SidebarFilters/>
            <RecipesGrid className="recipesGrid"/>
        </Box>
    )
}

export default Homepage;