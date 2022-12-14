import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const qnaPagingThunk = createAsyncThunk(
  "/managerInfo/qnaPageThunk",
  async () => {
    const { data } = await axios.post(
      "http://localhost:8080/api/manager/qnaPage"
    );
    console.log(data);
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
      .addCase(qnaPagingThunk.pending, (state, action) => {
        console.log("qnaPaging pending");
      })
      .addCase(qnaPagingThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        console.log("qnaPaging fulfilled");
        return payload;
      })
      .addCase(qnaPagingThunk.rejected, (state, action) => {
        console.log("qnaPaging rejected");
      });
  },
});

export const action = qnaPaging.actions;

export const reducer = qnaPaging.reducer;
