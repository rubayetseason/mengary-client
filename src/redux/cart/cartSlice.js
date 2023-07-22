import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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

      toast.success("Item added successfully.");
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      toast.success("Item removed successfully.");
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
      toast.success("Item removed successfully.");
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
