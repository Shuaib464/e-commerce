import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './features/categorySlice'

const store = configureStore({
    reducer: {
        categoryR: categoryReducer,
    }
})


export default store;