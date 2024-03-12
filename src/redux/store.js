 import { configureStore } from "@reduxjs/toolkit";
 import cartSlice from "./slice/cartSlice";
 import accountSlice from "./slice/accountSlice";
 import productSlice from "./slice/productSlice";


 export const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
      account: accountSlice.reducer,
      products: productSlice,
    },
 })