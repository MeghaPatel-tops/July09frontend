import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Category'

export const store =  configureStore({
    reducer:{
        category:categoryReducer
    }
})
