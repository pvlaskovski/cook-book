import RecipesGrid from "../RecipesGrid/RecipesGrid";
import SidebarFilters from "../SideberFilters/SidebarFilters";

import { Box } from "@mui/system";
import { Button, TextField, Container } from "@mui/material";

import firebaseService from '../../services/firebase';

import { useEffect, useState } from 'react';

import './Homepage.css';

function Homepage(props){

    const [recipes, setRecipes] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        firebaseService.getAllRecipes()
            .then(res=> {
                setRecipes(res);
            })  
    }, []);

    const handleSearchClick = () =>{
       let word = document.getElementById("search").value;
       setSearchWord(word.toLowerCase());
    }

    {console.log("Render")}
    return(
        <Box className="homepageMainContainer">
            <Container>
                <TextField id="search" label="Search recipe" type="search" name="search" fullWidth/>
                <Button variant="contained" onClick={handleSearchClick}>Search</Button>
            </Container>

            <SidebarFilters/>
            <RecipesGrid className="recipesGrid" recipes={recipes} searchWord={searchWord}/>
        </Box>
    )
}

export default Homepage;