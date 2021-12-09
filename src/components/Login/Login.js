import firebaseService from '../../services/firebase';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState } from 'react';
import toast from 'react-hot-toast';



export default function SignUp() {
    const [user, setUser] = useState();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const email = data.get('email');
        const password = data.get('password')
       
            
        firebaseService.login(email, password)
        .then(res => {
            const user = res.user;
            console.log(user.email);
            toast.success("Welcome " + user.email);
        })
        .catch(err=>{
            toast.error("Incorrect username or password");
        })
        
            
    };

    return (
        <Container component="div" maxWidth="xs" >
            <Box >
                <Avatar />

                <Typography component="h1" variant="h5">Log in</Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/forgot" variant="body2">
                                Forgot your password?
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}

