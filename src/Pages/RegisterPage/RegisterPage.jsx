import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// *****************************************************************
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../../Store/users.js';
// ******************************************************************

export default function RegisterPage() {
    // ******************************************************************
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isauth = useSelector(state => state.Users.isauth)
    const handleSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("password") === data.get("repassword")) {
            const newUser = {
                fName: data.get("fname"),
                lName: data.get("lname"),
                email: data.get("email"),
                password: data.get("password"),
                password2: data.get("repassword"),
            };
            dispatch(addUser(newUser))
            navigate('/Login');
        }
        else {
            alert('Repassword is wrong!')
        }
    };
    // ******************************************************************

    return (isauth ? <Navigate to="/" /> :
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <TextField
                            margin="normal"
                            required
                            id="fname"
                            label="First Name"
                            name="fname"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            id="lname"
                            label="Last Name"
                            name="lname"
                            autoFocus
                        />
                    </Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repassword"
                        label="Repeat Password"
                        type="password"
                        id="repassword"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/Login" variant="body2">
                                "Have you an account? Sign In"
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}