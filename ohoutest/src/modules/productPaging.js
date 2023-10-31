import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const productPagingThunk = createAsyncThunk(
  "/managerInfo/productPageThunk",
  async () => {
    const { data } = await axios.post("/api/manager/productPage");
    return data;
  }
);

const productPaging = createSlice({
  name: "productPaging",
  initialState: [],
  reducers: {
    setPaging: (state, action) => {
      const { type, payload } = action;
      state = [...state, payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productPagingThunk.pending, (state, action) => {})
      .addCase(productPagingThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        return payload;
      })
      .addCase(productPagingThunk.rejected, (state, action) => {});
  },
});

export const action = productPaging.actions;

export const reducer = productPaging.reducer;
