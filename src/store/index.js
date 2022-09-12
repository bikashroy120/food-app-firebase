import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart/cart-slice";
import orderSlice from "./Order/order-slice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        order:orderSlice.reducer,
     }
});
export default store;