import './UserArea.css';
import { List, Container, Box, Avatar, Typography, Divider, ListItemButton } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import BadgeIcon from '@mui/icons-material/Badge';

import ListItemWithIcon from "../Common/ListItemWithIcon";
import FavouriteRecipes from "./FavouriteRecipes";

import userService from '../../services/userService';
import firebaseService from "../../services/firebase";

import { useAuthContext } from "../../contexts/AuthContext";

import { useEffect, useState } from "react";

export default function UserArea() {
    const [currentUser, setCurrentUser] = useState(null);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        const abortController = new AbortController();

        userService.getUserById(user.uid)
            .then(u => {
                setCurrentUser(u);
                return u;
            })
            .then(u => {
                let ids = u.favouriteRecipes;
                return firebaseService.getRecipesById(ids);
            })
            .then(res => {
                console.log(res);
                setFavoriteRecipes(res);
            })

        return () => {
            abortController.abort();
        };
    }, [])

    return (
        <Box className="mainUserContainer">
            <Container className="userInfoContainer">
                <Avatar className="userAvatar">{currentUser?.firstName.substring(0, 1) || "R"}</Avatar>
                <Typography variant="h5">User Info</Typography>
                <List className="mainUserContainer">
                    <ListItemWithIcon key="firstName" icon={<BadgeIcon />} primaryText="First Name" secondaryText={currentUser?.firstName || 'No first name'} />
                    <ListItemWithIcon key="secondName" icon={<BadgeIcon />} primaryText="Last Name" secondaryText={currentUser?.lastName || 'No last name'} />
                    <ListItemWithIcon key="email" icon={<MailIcon />} primaryText="E-mail" secondaryText={currentUser?.email || 'No email'} />
                </List>
            </Container>

            <Container className="favoriteRecipesContainer">
                <Typography variant="h5">Favorite Recipes</Typography>
                {
                    favoriteRecipes
                        ? <FavouriteRecipes recipes={favoriteRecipes} />
                        : null
                }
            </Container>
        </Box >
    )

}
