 import { configureStore } from "@reduxjs/toolkit";
 import cartSlice from "./slice/cartSlice";
 import accountSlice from "./slice/accountSlice";
 accountSlice

 export const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
      account: accountSlice.reducer,
    },
 })