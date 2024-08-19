import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { arrCart:[] },
    reducers: {
        addToCart: (state, action) => {
            var p = action.payload;
            var p1 = state.arrCart.find(e => e.product.id == p.id )
            if(p1) {
                p1.quantity += 1;
            } else{
                state.arrCart.push({product:p, quantity:1})
            }
        },
        increaseProduct: (state, action) => {
            var p = state.arrCart.find(e => e.product.id === action.payload.id)
            p.quantity += 1;
        },
        decreaseProduct: (state, action) => {
            var p = state.arrCart.find(e => e.product.id === action.payload.id)
            if(p.quantity == 1){
                state.arrCart = state.arrCart.filter(e => e.product.id !== p.product.id)
            } else {
                p.quantity -= 1;
            }
        },
        removeProduct: (state, action) => {
            let product = action.payload;
            //state.arrCart = state.arrCart.filter(e => e.product.id !== product.id)      // using filter

            // using splice method
            let index = state.arrCart.findIndex((e) => e.product.id == product.id)
            if(index !== -1){
                state.arrCart.splice(index, 1);
            }
        }
    }
})

export default cartSlice.reducer
export const {addToCart, increaseProduct, decreaseProduct, removeProduct} = cartSlice.actions;