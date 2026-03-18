import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const addProduct = createAsyncThunk('addProduct', async (data) => {
    try {
        const res = await addDoc(collection(db, 'products'), data);
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

export const getProductData = createAsyncThunk('getProductData', async () => {
    try {
        const getproductarray = await getDocs(collection(db, "category"));
        const productSnap = await getDocs(collection(db, "products"));

        const categories = getproductarray.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        let products = [];
            productSnap.forEach(doc => {
                let data = doc.data();

                products.push({
                id: doc.id,
                ...data,
                category: categories[data.catid]?.catname
                });
            });

        return products;
    } catch (error) {
        console.log("Fetch Error:", error.message);
        throw error;
    }
}
);

export const productDeleteByID= createAsyncThunk('productDeleteByID',async(pid)=>{
    try {
        let docRef = doc(db,"products",pid);
        const res = await deleteDoc(docRef);
        if(res){
            let result ={msg:"Deleted..."}
            return result
        }
    } catch (error) {
        return error
    }
})

 export  const getProductById=createAsyncThunk('getProductById',async(pid)=>{
        try {
            const docRef= doc(db,"products",pid);
            const sinleProduct = await getDoc(docRef);
            const result= sinleProduct.data();
            console.log(result);
            
           return result
            
        } catch (error) {
           return error
            
        }
    })

// export const updateCategory = createAsyncThunk('updateCategory',async(data)=>{
//     try {
      
        
//         const docRef= doc(db,"category",data.id);
//         const result = await setDoc(docRef,data.proObj,{merge:true});
//         if(result){
//             console.log(result);
            
//             return result;

//         }
//     } catch (error) {
//         console.log(error);
        
//         return error
//     }
// })

export const productSlice = createSlice(
    {
        name: 'product',
        initialState: {
            promsg: "",
            productArray: [],
            error: null,
            singleProduct: null,
            isloading: false
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(addProduct.pending, (state) => {
                state.isloading = true;
            })
                .addCase(addProduct.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.promsg = action.payload.msg;
                })
                .addCase(addProduct.rejected, (state, action) => {

                    state.error = action.payload;
                })

                .addCase(getProductData.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getProductData.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.productArray = action.payload;
                })
                .addCase(getProductData.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                .addCase(productDeleteByID.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(productDeleteByID.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.promsg = "Deleted";
                })
                .addCase(productDeleteByID.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                .addCase(getProductById.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getProductById.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.singleProduct = action.payload;
                })
                .addCase(getProductById.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
                //  .addCase(updateCategory.pending, (state) => {
                //     state.isloading = true;
                // })
                // .addCase(updateCategory.fulfilled, (state, action) => {
                //      state.isloading = false;
                //      state.catmsg = "Updated";
                // })
                // .addCase(updateCategory.rejected, (state, action) => {
                //     state.isloading = false;
                //     state.error = action.payload;
                // })
        }
    }
)

const productReducer = productSlice.reducer;

export default productReducer;


