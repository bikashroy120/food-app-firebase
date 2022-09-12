import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'order',
    initialState:{
        Items:[],
    },
    reducers:{
        orderItems(state,action){
            state.Items = action.payload;
        },
       
    }
});
export const orderActions = orderSlice.actions;
export default orderSlice;