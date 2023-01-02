import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const qnaPagingThunk = createAsyncThunk(
  "/managerInfo/qnaPageThunk",
  async () => {
    const { data } = await axios.post("/api/manager/qnaPage");
    return data;
  }
);
const qnaPaging = createSlice({
  name: "qnaPaging",
  initialState: [],
  reducers: {
    setQnaPaging: (state, action) => {
      const { type, payload } = action;
      state = [...state, payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(qnaPagingThunk.pending, (state, action) => {})
      .addCase(qnaPagingThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        return payload;
      })
      .addCase(qnaPagingThunk.rejected, (state, action) => {});
  },
});

export const action = qnaPaging.actions;

export const reducer = qnaPaging.reducer;
