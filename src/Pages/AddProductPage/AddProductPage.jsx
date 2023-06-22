import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from '@mui/material/CardMedia';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// *****************************************************************
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../Store/products';
// ******************************************************************

export default function ProfilePage() {
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
// ******************************************************************
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [image, setImage] = React.useState('https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png')

    const isauth = useSelector(state => state.Users.isauth)
    const token = useSelector(state => state.Users.token)
    const user = useSelector(state => state.Users.usersList[token - 1])
    const productCount = useSelector(state => state.OurProducts.productCount)

    const handleAddProduct = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newProduct = {
            productId:productCount+1,
            userId:token,
            image:data.get('image'),
            productName:data.get('productName'),
            price:data.get('price'),
            currency:' IRR',
            category:data.get('category'),
            registerDate: '2023-05-31-09:10:26',
            describe:data.get('describe'),
            activeFlag:true
        };
        dispatch(addProduct(newProduct))
        navigate('/');
    };
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
                <CardMedia
                    component='img'
                    height='136'
                    image={image}
                    alt='alt'
                />

                <Box component="form" onSubmit={(e)=>handleAddProduct(e)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="image"
                        label="Poduct Image Address on Web"
                        name="image"
                        autoFocus
                        defaultValue={'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png'}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="productName"
                        label="productName"
                        name="productName"
                        autoFocus
                    />
                    <FormControl required fullWidth>
                        <InputLabel id="demo-simple-select-label">category</InputLabel>
                        <Select
                            margin="normal"
                            required
                            fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="category"
                            value={category}
                            label="Category *"
                            onChange={handleChange}
                        >
                            <MenuItem value={'NONE'}>NONE</MenuItem>
                            <MenuItem value={'Estate'}>Estate</MenuItem>
                            <MenuItem value={'Car'}>Car</MenuItem>
                            <MenuItem value={'Digital'}>Digital</MenuItem>
                            <MenuItem value={'Furniture'}>Furniture</MenuItem>
                            <MenuItem value={'Services'}>Services</MenuItem>
                            <MenuItem value={'Accessory'}>Accessory</MenuItem>
                            <MenuItem value={'Equipment'}>Equipment</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        name="price"
                        autoFocus
                        type="number"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="describe"
                        label="Describe"
                        name="describe"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Product
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}