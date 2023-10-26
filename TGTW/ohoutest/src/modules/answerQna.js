import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import axios from "axios";

export const answerQnaThunk = createAsyncThunk(
  "/managerInfo/answerQnaThunk",
  async (id, answerQnaText) => {
    const { data } = await axios.post("/api/manager/answerQna", {
      id: id,
      qnaAnswer: answerQnaText,
    });
    return data;
  }
);

const answerQna = createSlice({
  name: "answerQna",
  initialState: [],
  reducers: {
    setAnswerQna: (state, action) => {
      const { type, payload } = action;
      state = [...state, ...payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(answerQnaThunk.pending, (state, action) => {})
      .addCase(answerQnaThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        return payload;
      })
      .addCase(answerQnaThunk.rejected, (state, action) => {});
  },
});

export const action = answerQna.actions;

export const reducer = answerQna.reducer;
