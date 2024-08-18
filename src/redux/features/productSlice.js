import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export  const fetchProducts = createAsyncThunk('product/fetchProducts', ()=> {
    var p = axios.get('https://dummyjson.com/products?limit=0');
    return p;
})

const productSlice = createSlice({
    name: 'product',
    initialState: { loading: false, arrProduct: [], error: '' },
    // reducers: {
    //     changeCategory: (state, action) => {
    //         state.selectedCategory = action.payload;
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
             state.loading = true;   
             state.arrProduct = []
             state.error = ''
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
             state.loading = false
             //state.arrCategory = action.payload.data.map(e => e.name);    // action.payload.data == response.data
             state.arrProduct = action.payload.data.products;
             state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false 
            state.error = action.payload
            state.arrProduct = []
        })
    }

})


export default productSlice.reducer
// export const {changeCategory} = categorySlice.actions;