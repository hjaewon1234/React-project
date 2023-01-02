import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const productManageThunk = createAsyncThunk(
  "/product/productManageThunk",
  async (num) => {
    const { data } = await axios.post("/api/manager/productManage", {
      number: num,
    });

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
      const { type, payload } = action;
      state = [...state, ...payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productManageThunk.pending, (state, action) => {})
      .addCase(productManageThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        return payload;
      })
      .addCase(productManageThunk.rejected, (state, action) => {});
  },
});

export const action = productManage.actions;

export const reducer = productManage.reducer;
