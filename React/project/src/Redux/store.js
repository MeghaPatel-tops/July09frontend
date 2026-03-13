import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Category'
import productReducer from "./Product";
import userReducer from "./Users";

export const store =  configureStore({
    reducer:{
        category:categoryReducer,
        product:productReducer,
        users:userReducer
    }
})
