import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc,query,where } from "firebase/firestore";
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
export const addToCartProduct = createAsyncThunk('addToCartProduct', async (data) => {
    try {
        const res = await addDoc(collection(db, 'cart'), data);
        console.log(res);

        if (res) {
            const result = {
                msg: "Added in Cart"
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

export const getCartData= createAsyncThunk('getCartData',async(uid)=>{
    try {
        
        const q = query(
            collection (db, "cart"),
            where("userId", "==", uid)
        );

        const snapShot = await getDocs(q);

        const data = snapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const getCartData1 = async () =>
            await Promise.all(
                data.map(async item => ({
                ...item,
                product: (await getDoc(doc(db, "products", item.pid))).data()
                }))
            );

        let final = await getCartData1();
        console.log("in thunk ",final);
        
        return final;
          
    } catch (error) {
        return error;
    }
})

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
            isloading: false,
            cartarray:[]
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
                .addCase(addToCartProduct.pending, (state) => {
                state.isloading = true;
            })
                .addCase(addToCartProduct.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.promsg = action.payload.msg;
                })
                .addCase(addToCartProduct.rejected, (state, action) => {

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
                 .addCase(getCartData.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getCartData.fulfilled, (state, action) => {
                     state.isloading = false;
                     state.cartarray= action.payload;
                })
                .addCase(getCartData.rejected, (state, action) => {
                    state.isloading = false;
                    state.error = action.payload;
                })
        }
    }
)

const productReducer = productSlice.reducer;

export default productReducer;


