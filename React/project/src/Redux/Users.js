import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc,query,where } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const addUsers = createAsyncThunk('addUsers', async (data) => {
    try {
        const res = await addDoc(collection(db, 'users'), data);
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



export const getUserAuth = createAsyncThunk('getUserAuth', async (data) => {
    try {
        console.log(data);
        
        const q = query(
            collection(db, "users"),
            where("email", "==", data.email),
            where("password", "==", data.password)
        );
        const snapshot = await getDocs(q);
        

        if(snapshot.docs.length === 0){
             return false
        }
        else{
             const userDoc = snapshot.docs[0];

            return {
                id: userDoc.id,          // ✅ document ID
                ...userDoc.data()       // ✅ document data
            };
        }
        
      
        
        
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

export const userSlice = createSlice(
    {
        name: 'users',
        initialState: {
            usermsg: null,
            uerror: null,
            loggedUser: null,
            isloading: false,
            loogedstatus:false
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(addUsers.pending, (state) => {
                state.isloading = true;
            })
                .addCase(addUsers.fulfilled, (state, action) => {
                    state.isloading = false;
                    state.usermsg = action.payload.msg;
                })
                .addCase(addUsers.rejected, (state, action) => {
                    state.uerror = action.payload;
                })

                .addCase(getUserAuth.pending, (state) => {
                    state.isloading = true;
                })
                .addCase(getUserAuth.fulfilled, (state, action) => {
                    state.isloading = false;
                    
                     if(action.payload != false){
                          state.loggedUser=action.payload
                          console.log(action.payload);
                          
                         localStorage.setItem('users',JSON.stringify(action.payload))
                         console.log(action.payload);
                         
                          state.usermsg="Login success"
                     }
                     else{
                       
                        state.usermsg="User not Found"
                     }
                })
                .addCase(getUserAuth.rejected, (state, action) => {
                    state.isloading = false;
                    state.uerror = action.payload;
                })
        }
    }
)

const userReducer = userSlice.reducer;

export default userReducer;


