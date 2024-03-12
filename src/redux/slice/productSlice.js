import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        return response.json();
    });
    
export const fetchSingleProduct = createAsyncThunk(
    "fetchSingleProduct",
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        return response.json();
    });

const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
        singleProduct: {}, 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
         }),
         builder.addCase(fetchProducts.rejected, (state, action) => {
             state.isLoading = false;
             state.isError = true;
         }),


         builder.addCase(fetchSingleProduct.pending, (state,action) => {
             state.isLoading = true;
         }),
         builder.addCase(fetchSingleProduct.fulfilled, (state,action) => {
             state.singleProduct = action.payload;
             state.isLoading = false;
         }),
         builder.addCase(fetchSingleProduct.rejected, (state,action) => {
             state.isLoading = false;
             state.isError = true;
         })

    },
});

export default productSlice.reducer;