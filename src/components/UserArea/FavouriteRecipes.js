import { List, ListItemButton } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemWithIcon from "../Common/ListItemWithIcon";

import { Link as RouterLink } from 'react-router-dom';

export default function FavouriteRecipes({
    recipes
}) {
    return (
        <List>
            {recipes.map(r => {
                return (
                    <ListItemButton key={r.recipeId} component={RouterLink} to={`/recipe/${r.recipeId}`} >
                        <ListItemWithIcon
                            icon={<MenuBookIcon />}
                            primaryText={r?.recipeName || 'No recipe name'}
                        />
                    </ListItemButton>
                )
            })}
        </List>
    )
}