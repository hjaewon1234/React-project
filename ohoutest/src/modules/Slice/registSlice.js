import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  inputId: "",
  inputPw: "",
  inputPw1: "",
  inputName: "",
  inputAdress: "",
  inputAdress1: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  console.log(body);
  const { data } = await axios.post("http://localhost:8080/api/user/getUsers", {
    ...body,
    body: JSON.stringify(body),
  });
  console.log(data);
  return data;
});
// axios.post("경로", {담아서 보낼 데이터})

const registSlice = createSlice({
  name: "userRegist",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userRegist.user = action.payload;
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      console.log("pending");
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      console.log(current(state));
      return payload;
    },
    [signUpUser.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const action = registSlice.actions;

export const reducer = registSlice.reducer;
