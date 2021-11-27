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

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="div" maxWidth="xs" >
            <Box >
                <Avatar />

                <Typography component="h1" variant="h5">Sign up</Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="firstName" id="firstName" label="First Name" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField name="lastName" id="lastName" label="Last Name" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name="email" id="email" label="Email Address" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name="password" label="Password" type="password" id="password" />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="agreement" color="primary" />}
                                label="I agree with the tearms and conditions"
                            />
                        </Grid>

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}

