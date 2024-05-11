import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartedProducts: JSON.parse(localStorage.getItem("cartedProducts")) || []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartProduct: (state, action) => {
            const exists = state.cartedProducts.find(p => p.id === action.payload.id);
            if (!exists) {
                state.cartedProducts.push(action.payload);
                localStorage.setItem("cartedProducts", JSON.stringify(state.cartedProducts));
            }
        },
        unCartProduct: (state, action) => {
            state.cartedProducts = state.cartedProducts.filter(p => p.id !== action.payload.id);
            localStorage.setItem("cartedProducts", JSON.stringify(state.cartedProducts));
        }
    }
});

export default cartSlice.reducer;
export const { cartProduct, unCartProduct } = cartSlice.actions;
