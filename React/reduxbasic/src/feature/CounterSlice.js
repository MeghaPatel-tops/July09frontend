import {createSlice} from "@reduxjs/toolkit"

export const CounterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1
            
        },
        decrement:(state)=>{
            state.value-=1
             //console.log("counter=",state.value);
        }
    }
})

export const {increment,decrement}=CounterSlice.actions
export default   CounterSlice.reducer;

