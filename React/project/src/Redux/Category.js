import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const addCat= createAsyncThunk('addCat',async(data)=>{
    try {
        const res = await  addDoc(collection(db,'category'),data);
        console.log(res);
        
        if(res){
            const result = {
                msg:"Success"
            };
            return result
        }
    } catch (error) {
        return error

        console.log("firebas error",error.message);
        
    }
})

export const categorySlice = createSlice(
    {
    name:'category',
    initialState:{
        catmsg:"",
        catData:[],
        error:null,
        singleCat:null,
        isloading:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
           builder.addCase(addCat.pending,(state)=>{
                 state.isloading=true;
           })
           .addCase(addCat.fulfilled,(state,action)=>{
               state.isloading=false;
               state.catmsg=action.payload.msg;
           })
            .addCase(addCat.rejected,(state,action)=>{
               
               state.error=action.payload;
           })
    }
    }
)

const categoryReducer =categorySlice.reducer;

export default  categoryReducer;


