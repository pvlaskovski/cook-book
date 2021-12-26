import firebaseService from '../../services/firebase';

import { Button, TextField, Grid, Box, Typography, Container } from '@mui/material';

import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import './Login.css';

export default function SignUp(props) {
    let navigate = useNavigate();

    const {login} = useAuthContext();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const email = data.get('email');
        const password = data.get('password');

        firebaseService.login(email, password)
            .then(res => {
                // const user = res.user;
                // let email = user.email;
                // let uid = user.uid;
                // login({ email, uid });
                toast.success("Welcome " + email);
                navigate('/');
            })
            .catch(err=>{
                toast.error("Incorrect username or password");
            }); 
    };

    return (
        <Container component="div" maxWidth="xs" className='loginContainer' >
            <Box >

                <Typography component="h1" variant="h5" align="center">Log in</Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12}>
                            <TextField fullWidth name="email" id="email" label="Email Address" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name="password" label="Password" type="password" id="password" />
                        </Grid>
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Log in
                    </Button>
                </Box>

            </Box>
        </Container>
    );
}

