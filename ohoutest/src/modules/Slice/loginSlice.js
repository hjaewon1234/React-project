import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  inputId: "",
  inputName: "",
};

export const logInUser = createAsyncThunk("/login/logInUser", async (body) => {
  const { data } = await axios.get("/api/login/success", {
    ...body,
    body: JSON.stringify(...body),
  });
  return data;
});

const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userLogin.user = action.payload;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(logInUser.pending, (state, action) => {})
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        return state;
      })
      .addCase(logInUser.rejected, (state, action) => {});
  },
});

export const action = loginSlice.actions;

export const reducer = loginSlice.reducer;
