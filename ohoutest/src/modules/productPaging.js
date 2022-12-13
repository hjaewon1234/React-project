import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const productPagingThunk = createAsyncThunk(
  "/product/productPageThunk",
  async () => {
    const { data } = await axios.post("/api/product/productPage");
    console.log(data);
    return data;
  }
);

const productPaging = createSlice({
  name: "productPaging",
  initialState: [
    {
      pageNum: 0,
    },
  ],
  reducers: {
    setPaging: (state, action) => {
      const { type, payload } = action;
      state = payload;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productPagingThunk.pending, (state, action) => {
        console.log("paging pending");
      })
      .addCase(productPagingThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        console.log("paging fulfilled");
        return payload;
      })
      .addCase(productPagingThunk.rejected, (state, action) => {
        console.log("paging rejected");
      });
  },
});

export const action = productPaging.actions;

export const reducer = productPaging.reducer;
