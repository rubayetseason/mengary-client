import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      //if added, add quantity +1
      if (existing) {
        //used null assertion ! to state this is not null
        existing.quantity = existing.quantity + 1;
      }
      //if not added, add quantity 1
      else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
    removeOne: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        //removeFromCart logic
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
