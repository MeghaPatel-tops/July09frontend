import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Category'
import productReducer from "./Product";

export const store =  configureStore({
    reducer:{
        category:categoryReducer,
        product:productReducer
    }
})
