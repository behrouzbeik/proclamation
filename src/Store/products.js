import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initProductsList = localStorage.getItem('productsList') == null ?
    [{
        productId:1,
        userId:1,
        image:'https://picsum.photos/id/10/300/136',
        productName:'Beach Garden',
        price:1000000000,
        currency:' IRR',
        category:'Estate',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },
    {
        productId:2,
        userId:1,
        image:'https://picsum.photos/id/20/300/136',
        productName:'BookStore Car',
        price:100,
        currency:' IRR',
        category:'Car',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },
    {
        productId:3,
        userId:1,
        image:'https://picsum.photos/id/30/300/136',
        productName:'Digitall Mag',
        price:100,
        currency:' IRR',
        category:'Digital',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },
    {
        productId:4,
        userId:1,
        image:'https://picsum.photos/id/40/300/136',
        productName:'Cat Chair',
        price:100,
        currency:' IRR',
        category:'Furniture',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },{
        productId:5,
        userId:1,
        image:'https://picsum.photos/id/50/300/136',
        productName:'Telle Service',
        price:100,
        currency:' IRR',
        category:'Services',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },{
        productId:6,
        userId:1,
        image:'https://picsum.photos/id/60/300/136',
        productName:'Glasses LOGO',
        price:100,
        currency:' IRR',
        category:'Accessory',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },{
        productId:7,
        userId:1,
        image:'https://picsum.photos/id/70/300/136',
        productName:'Farmer Equipment',
        price:100,
        currency:' IRR',
        category:'Equipment',
        registerDate: '2023-05-31-09:10:26',
        describe:'Hallo',
        activeFlag:true
    },]
:
    JSON.parse(localStorage.getItem('productsList'))

const initProductCount = localStorage.getItem('productCount') == null ? 7 : 
    JSON.parse(localStorage.getItem('productCount'))

const initActiveProducts = localStorage.getItem('activeProducts') == null ? 7 : 
    JSON.parse(localStorage.getItem('activeProducts'))

const initialState={
    category:'All',
    productsList:initProductsList,
    productCount:initProductCount,
    activeProducts:initActiveProducts,
    // loading: false,
    // error: [],
}

const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            console.log(action.payload)
            state.productsList.push(action.payload)
            state.productCount++
            state.activeProducts++
            localStorage.setItem(
                'productsList',
                JSON.stringify(state.productsList.map((item)=>item))
            )
            localStorage.setItem("productCount", JSON.stringify(state.productCount))
            localStorage.setItem("activeProducts", JSON.stringify(state.activeProducts))
        },
        updateProduct:(state,action)=>{
            const updatedProducts = state.productsList.map((product) => {
                if (product.productId === action.payload.product.productId) return action.payload.product;
                return product;
            });
            state.productsList = updatedProducts;
        },
        deactiveProduct:(state,action)=>{
            const updatedProducts = state.productsList.map((product) => {
                if (product.productId === action.payload.productId){
                    product.activeFlag = false
                    state.activeProducts=state.activeProducts--
                }
                return product;
            });
            state.productsList = updatedProducts;
        },
        categoryFilter:(state,action)=>{
            state.category = action.payload
        },
        SearchProduct:(state,action)=>{
            
        },
        userFilter:(state,action)=>state.productsList.filter(
            (product)=>action.payload.userId === product.userId),
    }
})

export default productsSlice.reducer
export const {addProduct, updateProduct, deactiveProduct, categoryFilter, userFilter}=productsSlice.actions