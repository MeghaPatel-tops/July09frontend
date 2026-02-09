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

export const getSingleProduct = createAsyncThunk('getSingleProduct',async(pid)=>{
    try {
        const res=  await axios.get('http://localhost:3000/product/'+pid);
        const data = res.data;
        console.log("in thunk",data);
        
        return data;

    } catch (error) {
        return error
    }
})

export const updateProduct = createAsyncThunk('updateProduct',async(data)=>{
    try {
        console.log(data.eid);
        
        console.log("pid type=",typeof(data.eid));
        
        let res = await axios.put('http://localhost:3000/product/'+data.eid,data.singleProduct);
        if(res){
           
            return true;
        }
        
    } catch (error) {
        return error
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
        oneProduct:{}
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
        .addCase(getSingleProduct.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.oneProduct=action.payload;
            console.log(state.oneProduct);
            
        })
        .addCase(getSingleProduct.rejected,(state,action)=>{
            state.error.action.payload
        })
         .addCase(updateProduct.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.msg="Product Updated!"
            
        })
        .addCase(updateProduct.rejected,(state,action)=>{
            state.error.action.payload
        })
    }
})


 export default  ProductSlice.reducer