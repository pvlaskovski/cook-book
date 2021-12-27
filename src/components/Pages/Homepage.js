import RecipesGrid from "../RecipesGrid/RecipesGrid";
import SidebarFilters from "../SideberFilters/SidebarFilters";

import { Box } from "@mui/system";
import { Button, TextField, Container, CircularProgress, Typography } from "@mui/material";


import firebaseService from '../../services/firebase';

import { useEffect, useState } from 'react';

import './Homepage.css';

function Homepage(props) {

    const [recipes, setRecipes] = useState();
    const [searchWord, setSearchWord] = useState("");
    const [typeFilters, setTypeFilters] = useState([]);
    const [difficultyFilters, setDifficultyFilters] = useState([]);

    useEffect(() => {
        firebaseService.getAllRecipes()
            .then(res => {
                setRecipes(res);
            })
    }, []);

    const handleSearchClick = () => {
        let word = document.getElementById("search").value;
        setSearchWord(word.toLowerCase());
        // console.log("Search click");
    }

    const handleGroupChange = (event, group) => {
        let checkboxGroup = group;
        let checkboxName = event.target.name;
        let checkboxIsChecked = Boolean(event.target.checked);

        if (checkboxGroup == "type") {

            if (checkboxIsChecked) {
                setTypeFilters(typeFilters => (
                    [...typeFilters, checkboxName]
                ));

            } else {
                setTypeFilters(typeFilters => (
                    typeFilters.filter(x => x !== checkboxName)
                ));
            }

        } else if (checkboxGroup == "difficulty") {
            if (checkboxIsChecked) {
                setDifficultyFilters(difficultyFilters => (
                    [...difficultyFilters, checkboxName]
                ));
            } else {
                setDifficultyFilters(difficultyFilters => (
                    difficultyFilters.filter(x => x !== checkboxName)
                ));
            }
        }
    }

    const renderRecipes = () => {
        if (recipes) {
            if (recipes.length > 0) {
                return (
                    <RecipesGrid 
                        className="recipesGrid"
                        recipes={recipes}
                        searchWord={searchWord}
                        typeFilters={typeFilters}
                        difficultyFilters={difficultyFilters} />
                )
            }else{
                return(
                    <Container>
                        <Typography align="center" variant='h6' sx={{mt:2}}>No recipes found! Go add the first one</Typography>
                    </Container>
                )
            }       
        }
        return (
            <Container>
                <Typography align="center" sx={{ mt: 5 }}><CircularProgress /></Typography>
            </Container>
        )
    }


    return (
        <Box className="homepageMainContainer">
            <Container className="searchContainer">
                <TextField id="search" label="Search recipe" type="search" name="search" className="searchInput"  fullWidth/>
                <Button variant="contained" className="searchButton" onClick={handleSearchClick}>Search</Button>
            </Container>

            <SidebarFilters
                className="sidebarFiltersContainer"
                handleGroupChange={handleGroupChange}
            />
            <Container className="recipesContainer">
                {renderRecipes()}
            </Container>
            
        </Box>
    )
}

export default Homepage;