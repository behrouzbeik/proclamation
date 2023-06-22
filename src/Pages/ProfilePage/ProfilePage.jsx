import CardList from '../../Components/CardList/CardList'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';

// *****************************************************************
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../../Store/users.js';
// ******************************************************************

export default function ProfilePage() {
    // ******************************************************************
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isauth = useSelector(state => state.Users.isauth)
    const token = useSelector(state => state.Users.token)
    const user = useSelector(state => state.Users.usersList[token - 1])
    const handleUpdate = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const updatedUser = {
            userId: user.userId,
            fName: data.get("fname"),
            lName: data.get("lname"),
            role: user.role,
            email: data.get("email"),
            password: user.password,
            profileImage: data.get("image"),
            callNumber: data.get("Call"),
            activeFlag: user.activeFlag
        };
        dispatch(updateUser(updatedUser))
        navigate('/Login');
    };

    let productList = useSelector(state => state.OurProducts.productsList)
    productList = (isauth) ? productList.filter((product) => product.userId == token) : []
    // ******************************************************************

    return (!isauth ? <Navigate to="/Login" /> :
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
                <Avatar
                    alt={user.lName}
                    src={user.profileImage}
                    sx={{ width: 100, height: 100 }}
                />

                <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="image"
                        label="Your Image Address on Web"
                        name="image"
                        autoFocus
                        defaultValue={user.profileImage}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <TextField
                            margin="normal"
                            required
                            id="fname"
                            label="First Name"
                            name="fname"
                            autoFocus
                            defaultValue={user.fName}
                        />
                        <TextField
                            margin="normal"
                            required
                            id="lname"
                            label="Last Name"
                            name="lname"
                            autoFocus
                            defaultValue={user.lName}
                        />
                    </Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        defaultValue={user.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="Call"
                        label="Call Number"
                        type="number"
                        id="call"
                        autoFocus
                        defaultValue={user.callNumber}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        update
                    </Button>

                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography variant='h2' component='div' sx={{ padding: 0 }}>
                        Your Products
                    </Typography>
                    <CardList type='Our' list={productList} />
                </Box>
            </Box>
        </Container>
    );
}