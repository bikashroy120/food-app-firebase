import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'order',
    initialState:{
        Items:[],
        Query:[]
    },
    reducers:{
        orderItems(state,action){
            state.Items = action.payload;
        },
        queryItems(state,action){
            state.Query = action.payload;
        },
       
    }
});
export const orderActions = orderSlice.actions;
export default orderSlice;