import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedProducts: JSON.parse(localStorage.getItem("likedProducts")) || []
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        likeProduct: (state, action) => {
            const exists = state.likedProducts.find(p => p.id === action.payload.id);
            if (!exists) {
                state.likedProducts.push(action.payload);
                localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
            }
        },
        unlikeProduct: (state, action) => {
            state.likedProducts = state.likedProducts.filter(p => p.id !== action.payload.id);
            localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
        }
    }
});

export default likeSlice.reducer;
export const { likeProduct, unlikeProduct } = likeSlice.actions;
