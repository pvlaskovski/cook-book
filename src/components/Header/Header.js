import { Toolbar, AppBar, Button } from '@mui/material';
import { Link } from "react-router-dom";
import './Header.css';

import { AuthContext, useAuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function Header() {
    const {user} = useAuthContext();

    function renderLoggedOutButtons() {
        return (
            <>
                <Button className="menuButton" color="inherit" component={Link} to="/register">Register</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
            </>
        )
    }

    function renderLoggedInButtons() {
        return (
            <>
                <span>Welcome {user.email}</span>   
                <Button color="inherit" component={Link} to="/logout">Logout</Button>
                <Button color="inherit" component={Link} to="/addRecipe">Add Recipe</Button>
            </>
        )
    }

    // console.log(user.email);
    return (
        <header>
            <AppBar className="header">
                <Toolbar className="toolbar-logo">
                    <h1 className="logo">Put logo here</h1>
                </Toolbar>
                <Toolbar className="toolbar-nav">
                    {user.email 
                        ? renderLoggedInButtons()
                        : renderLoggedOutButtons()
                    } 
                    {/* Buttons visible for logged in and out users */}
                    <Button color="inherit" component={Link} to="/recipes">Recipes</Button>

                </Toolbar>
            </AppBar>

        </header>
    );
}

export default Header;