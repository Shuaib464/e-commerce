import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export  const fetchCategory = createAsyncThunk('category/fetchCategory', ()=> {
    var p = axios.get('https://dummyjson.com/products/categories');
    return p;
})

const categorySlice = createSlice({
    name: 'category',
    initialState: { loading: false, arrCategory: [], selectedCategory: 'Categories', error: '' },
    reducers: {
        changeCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
             state.loading = true;   
             state.arrCategory = []
             state.error = ''
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
             state.loading = false
             //state.arrCategory = action.payload.data.map(e => e.name);    // action.payload.data == response.data
             state.arrCategory = action.payload.data;
             state.error = ''
        })
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false 
            state.error = action.payload
            state.arrCategory = []
        })
    }

})


export default categorySlice.reducer
export const {changeCategory} = categorySlice.actions;