import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productManageThunk = createAsyncThunk(
  "product/productManageThunk",
  async () => {
    const data = await axios.post(
      "http://localhost:8080/api/product/productManage"
    );
    return data;
  }
);

const productManage = createSlice({
  name: "productManageInfo",
  initialState: [{ name: "", price: "", brand: "", decription: "", img: "" }],
  reducers: {
    setProduct: (state, action) => {
      state = [...state, ...action.payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productManageThunk.pending, (state, action) => {
        console.log("reject");
        console.log(state);
      })
      .addCase(productManageThunk.fulfilled, (state, action) => {
        return [...state, ...action.payload];
      });
  },
});

export const action = productManage.actions;

export const reducer = productManage.reducer;
