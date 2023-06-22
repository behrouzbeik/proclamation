import ebayReducer from "./ebay.js";
import UsersReducer from "./users.js";
import OurProductsReducer from "./products.js";
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
        reducer: {
                ebay: ebayReducer,
                OurProducts :OurProductsReducer,
                Users:UsersReducer,
        },
})

export default store

