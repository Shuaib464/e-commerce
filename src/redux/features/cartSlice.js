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
        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions;