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

    const [typeFilters, setTypeFilters] = useState([]);
    const [difficultyFilters, setDifficultyFilters] = useState([]); 

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

    {console.log("Render")}
    return(
        <Box className="homepageMainContainer">
            <Container>
                <TextField id="search" label="Search recipe" type="search" name="search" fullWidth/>
                <Button variant="contained" onClick={handleSearchClick}>Search</Button>
            </Container>

            <SidebarFilters
                handleGroupChange={handleGroupChange}
            />
            <RecipesGrid className="recipesGrid" 
                recipes={recipes} 
                searchWord={searchWord}
                typeFilters={typeFilters}
                difficultyFilters={difficultyFilters}
            />
        </Box>
    )
}

export default Homepage;