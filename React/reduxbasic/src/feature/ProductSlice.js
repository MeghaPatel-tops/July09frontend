import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  getProduct = createAsyncThunk('getProduct',async()=>{
    try {
        let res = await axios.get('http://localhost:3000/product');
        let productArray = res.data;
        return productArray;
    } catch (error) {
        return error
    }
})

export const  addProduct = createAsyncThunk('addProduct',async(productdata)=>{
    try {
        let res = await axios.post('http://localhost:3000/product',productdata);
        if(res){
            return {msg:"Product successfully created"}
        }
    } catch (error) {
        return error;
    }
})

export const delProductThunk = createAsyncThunk('delProductThunk',async(pid)=>{
    try {
        let res = await axios.delete('http://localhost:3000/product/'+pid);
        if(res){
            return {msg:"Product deleted!"}
        }
    } catch (error) {
        return error;
    }
})

export const ProductSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        isLoading:false,
        error:null,
        msg:"",
    },
    reducers:{   
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state,actions)=>{
            state.isLoading=true;
        })
        .addCase(getProduct.fulfilled,(state,actions)=>{
            state.isLoading=false;
            state.products=actions.payload;
        })
        .addCase(getProduct.rejected,(state,actions)=>{
            state.error = actions.payload
        })
        .addCase(addProduct.pending,(state,action)=>{
             state.msg="Creating.....";
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.msg=action.payload.msg;
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.error=action.payload
        })
        .addCase(delProductThunk.pending,(state,action)=>{
            state.msg="Wait....."
        })
        .addCase(delProductThunk.fulfilled,(state,action)=>{
            state.msg=action.payload.msg
        })
        .addCase(delProductThunk.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})


 export default  ProductSlice.reducer