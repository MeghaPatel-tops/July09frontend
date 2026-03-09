import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const addCat = createAsyncThunk('addCat', async (data) => {
    try {
        const res = await addDoc(collection(db, 'category'), data);
        console.log(res);

        if (res) {
            const result = {
                msg: "Success"
            };
            return result
        }
    } catch (error) {
        return error

        console.log("firebas error", error.message);

    }
})

export const getCategoryData = createAsyncThunk('getCategoryData', async (data) => {
    try {
        const getproductarray = await getDocs(collection(db, "category"));

        const categories = getproductarray.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return categories;
    } catch (error) {
        console.log("Fetch Error:", error.message);
        throw error;
    }
}
);

export const catDeleteByID= createAsyncThunk('catDeleteByID',async(cid)=>{
    try {
        let docRef = doc(db,"category",cid);
        const res = await deleteDoc(docRef);
        if(res){
            let result ={msg:"Deleted..."}
            return result
        }
    } catch (error) {
        return error
    }
})

 export  const getCategoryById=createAsyncThunk('getCategoryById',async(cid)=>{
        try {
            const docRef= doc(db,"category",cid);
            const singleCategory = await getDoc(docRef);
            const result= singleCategory.data();
            console.log(result);
            
           return result
            
        } catch (error) {
           return error
            
        }
    })

export const updateCategory = createAsyncThunk('updateCategory',async(data)=>{
    try {
      
        
        const docRef= doc(db,"category",data.id);
        const result = await setDoc(docRef,data.proObj,{merge:true});
        if(result){
            console.log(result);
            
            return result;

        }
    } catch (error) {
        console.log(error);
        
        return error
    }
})

export const categorySlice = createSlice(
    {
        name: 'category',
        initialState: {
            catmsg: "",
            catArray: [],
            error: null,
            singleCat: null,
            isloading: false
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(addCat.pending, (state) => {
                state.isloading = true;
            })
                .addCase(addCat.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.catmsg = action.payload.msg;
                })
                .addCase(addCat.rejected, (state, action) => {

                    state.error = action.payload;
                })

                .addCase(getCategoryData.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getCategoryData.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.catArray = action.payload;
                })
                .addCase(getCategoryData.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                .addCase(catDeleteByID.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(catDeleteByID.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.catmsg = "Deleted";
                })
                .addCase(catDeleteByID.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                .addCase(getCategoryById.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getCategoryById.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.singleCat = action.payload;
                })
                .addCase(getCategoryById.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                 .addCase(updateCategory.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(updateCategory.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.catmsg = "Updated";
                })
                .addCase(updateCategory.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
        }
    }
)

const categoryReducer = categorySlice.reducer;

export default categoryReducer;


