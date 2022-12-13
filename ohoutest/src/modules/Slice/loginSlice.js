import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  inputId: "",
  inputPw: "",
};

export const logInUser = createAsyncThunk("logInUser", async (body) => {
  console.log(body);
  const { data } = await axios.post("http://localhost:8080/api/login/success", {
    ...body,
    body: JSON.stringify(body),
  });
  console.log(data);
  return data;
});
// axios.post("경로", {담아서 보낼 데이터})

const logInSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userLogin.user = action.payload;
    },
  },
  extraReducers: {
    [logInUser.pending]: (state, action) => {
      console.log("pending");
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      console.log(current(state));
      return payload;
    },
    [logInUser.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const action = logInSlice.actions;

export const reducer = logInSlice.reducer;
