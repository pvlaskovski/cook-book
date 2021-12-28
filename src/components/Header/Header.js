import { Toolbar, AppBar, Button, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import './Header.css';

import { useAuthContext } from '../../contexts/AuthContext';

function Header() {
    const { user } = useAuthContext();

    console.log("Render");

    function renderLoggedOutButtons() {
        return (
            <>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button className="menuButton" color="inherit" component={Link} to="/register">Register</Button>
            </>
        )
    }

    function renderLoggedInButtons() {
        return (
            <>
                <Button color="inherit" component={Link} to="/user">Welcome {user.email}</Button>
                <Button color="inherit" component={Link} to="/logout">Logout</Button>
                <Button color="inherit" component={Link} to="/addRecipe">Add Recipe</Button>
            </>
        )
    }

    return (
        <header>
            <AppBar className="header">
                <Toolbar className="toolbar-logo">
                    <Button color="inherit" component={Link} to="/">
                        <Typography className="logo" variant='h5' component="h1">
                            Cook Book
                        </Typography>
                    </Button>
                </Toolbar>
                <Toolbar className="toolbar-nav">

                    {user.email
                        ? renderLoggedInButtons()
                        : renderLoggedOutButtons()
                    }
                  
                    <Button color="inherit" component={Link} to="/">Recipes</Button>

                </Toolbar>
            </AppBar>

        </header>
    );
}

export default Header;