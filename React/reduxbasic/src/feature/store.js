import { configureStore } from "@reduxjs/toolkit";
import  CounterReducer  from "./CounterSlice";
import ProductReducer   from "./ProductSlice"


export const store = configureStore({
    reducer:{
        counter:CounterReducer,
        products:ProductReducer
    }
})