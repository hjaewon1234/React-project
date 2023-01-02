import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const qnaInfoThunk = createAsyncThunk(
  "/managerInfo/qnaInfoThunk",
  async (num) => {
    const { data } = await axios.post("/api/manager/qnaInfo", { number: num });
    return data;
  }
);

const qnaInfoManage = createSlice({
  name: "qnaInfo",
  initialState: [],
  reducers: (state, action) => {
    const { type, payload } = action;
    state = [...state];
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(qnaInfoThunk.pending, (state, action) => {})
      .addCase(qnaInfoThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        return payload;
      })
      .addCase(qnaInfoThunk.rejected, (state, action) => {});
  },
});

export const action = qnaInfoManage.actions;

export const reducer = qnaInfoManage.reducer;
