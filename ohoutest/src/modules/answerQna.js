import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import axios from "axios";

export const answerQnaThunk = createAsyncThunk(
  "/managerInfo/answerQnaThunk",
  async (id, answerQnaText) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/manager/answerQna",
      { id: id, qnaAnswer: answerQnaText }
    );
    console.log(data);
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
      .addCase(answerQnaThunk.pending, (state, action) => {
        console.log("answerQna pending");
      })
      .addCase(answerQnaThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        console.log(current(state));
        console.log("answerQna fulfilled");
        return payload;
      })
      .addCase(answerQnaThunk.rejected, (state, action) => {
        console.log("answerQna rejected");
      });
  },
});

export const action = answerQna.actions;

export const reducer = answerQna.reducer;
