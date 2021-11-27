import {Toolbar, AppBar, Button} from '@mui/material';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {

    return (
        <header>
            <AppBar>
                <Toolbar>
                    <h1>Put logo here</h1>

                    <Button className="menuButton" color="inherit" component={Link} to="/register">Register</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/logout">Logout</Button>
                    <Button color="inherit" component={Link} to="/recepies">Recepies</Button>
                </Toolbar>
            </AppBar>

        </header>
    );
}

export default Header;