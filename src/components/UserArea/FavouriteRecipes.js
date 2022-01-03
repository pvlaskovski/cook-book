import { List } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';

import ListItemWithIcon from "../Common/ListItemWithIcon";

import { useEffect, useState } from "react";

import firebaseService from "../../services/firebase";

export default function FavouriteRecipes({
    recipes
}) {

    return (
        <List className="mainUserContainer">
            {recipes.map(r => {
                return (
                    <ListItemWithIcon
                        key="firstName"
                        icon={<BadgeIcon />}
                        primaryText={r.recipeName || 'No recipe name'}
                    />
                )
            })}
        </List>


    )
}