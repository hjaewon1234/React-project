import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productManageThunk = createAsyncThunk(
  "/product/productManageThunk",
  async () => {
    const { data } = await axios.post(
      "http://localhost:8080/api/product/productManage"
    );

    return data;
  }
);

const productManage = createSlice({
  name: "productManageInfo",
  initialState: [
    {
      brand: 1,
      category: 2,
      description: 3,
      id: 4,
      img: 5,
      name: 6,
      price: 7,
    },
  ],
  reducers: {
    setProduct: (state, action) => {
      console.log(state);
      state = [...state, ...action.payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productManageThunk.pending, (state, action) => {
        console.log("pending");
        console.log(state);
      })
      .addCase(productManageThunk.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        return { payload };
      });
  },
});

export const action = productManage.actions;

export const reducer = productManage.reducer;
