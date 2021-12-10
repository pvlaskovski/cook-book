import firebaseService from '../../services/firebase';

import { useState } from 'react';

import './Register.css';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import { Link as RouterLink } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function Register() {

    const [pwStrenght, setPwStrenght] = useState({
        class: null,
        value: 0
    });

    const handlePassword = (event) =>{
        let pw = event.currentTarget.value;
        console.log(pw); 

        //one Capital, One special, One number, One lower
        const strongPasRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/gm;
        const mediumPasRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/gm;

        if(pw.match(strongPasRegex)){
            setPwStrenght(prevState => ({
                ...prevState,
                class: "strong",
                value: 100
            }));
        }else if(pw.match(mediumPasRegex)){
            setPwStrenght(prevState => ({
                ...prevState,
                class: "medium",
                value: 66
            }));
        }else if(pw.length>0){
            setPwStrenght(prevState => ({
                ...prevState,
                class: "weak",
                value: 33
            }));
        }else{
            setPwStrenght(prevState => ({
                ...prevState,
                class: null,
                value: 0
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const email = data.get('email');
        const password = data.get('password')
        
      
        firebaseService.register(email, password)
            .then(res =>{
                console.log(res);
                toast.success(`${email} registered succesfully!`)
            })
            .catch(error=>{
                toast.error(error.message);
            })
       

    };

    return (
        <Container component="div" maxWidth="xs" >
            <Box >
                <Avatar />

                <Typography component="h1" variant="h5">Register</Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="firstName" id="firstName" label="First Name" required/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField name="lastName" id="lastName" label="Last Name" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name="email" id="email" label="Email Address" required/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name="password" label="Password" type="password" id="password" required onChange={handlePassword} />
                        
                            <LinearProgress variant="determinate" className={pwStrenght.class} value={pwStrenght.value}/>

                            <Typography variant="body2" className={pwStrenght.class}>
                                {pwStrenght.class ? `${pwStrenght.class} password` : ""}
                            </Typography>
                            
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="agreement" color="primary" />}
                                label="I agree with the tearms and conditions"
                            />
                        </Grid>

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Regiser
                    </Button>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link variant="body2" component={RouterLink} to="/login">
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}

