import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    category: '',
    productsList: [],
    loading: false,
    error: [],
}

export const fetchProducts = createAsyncThunk('products/fetch', categoryFilter('Car'))

async function categoryFilter(category='Estate'){
    console.log(`https://ebay32.p.rapidapi.com/search/${category}`)
    const options = {
        method: 'GET',
        url: `https://ebay32.p.rapidapi.com/search/${category}`,
        params: { page: '1' },
        headers: {
            'X-RapidAPI-Key': 'f5284ab5c7msh971d8c98c484019p19b505jsnb87268ff8ae6',
            'X-RapidAPI-Host': 'ebay32.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.products //state.productsList = response.data;
    } catch (error) {
        return [error] //state.productsList = [error];
    }
}

const ebaySlice = createSlice({
    name: 'ebay',
    initialState,
    reducers: {
        categoryFilter,
    },
    extraReducers:{
        [fetchProducts.fulfilled]:(state, action) => {
            state.loading= false
            state.productsList=action.payload
            state.error=[]
        },
        [fetchProducts.pending]:(state) => {
            state.productsList=[]
            state.loading= true
        },
        [fetchProducts.rejected]:(state,action) => {
            state.loading= false
            state.productsList=[]
            state.error=action.payload
        },
    }
})

export default ebaySlice.reducer
export const { categoryFilter:categoryFilterAction } = ebaySlice.actions