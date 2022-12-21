import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  inputId: "",
  inputName: "",
};

// export const logInUser = createAsyncThunk("logInUser", async (body) => {
//   console.log(body);
//   const { data } = await axios.post("http://localhost:8080/api/login/success", {
//     ...body,
//     body: JSON.stringify(body),
//   });
//   console.log(data);
//   return data;
// });
// axios.post("경로", {담아서 보낼 데이터})

export const logInUser = createAsyncThunk("/login/logInUser", async (body) => {
  console.log(body);
  const { data } = await axios.get("http://localhost:8080/api/login/success", {
    ...body,
    body: JSON.stringify(...body),
  });
  return data;
});
// axios.post("경로", {담아서 보낼 데이터})

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
      .addCase(logInUser.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        console.log("fulfilled", payload);
        console.log(current(state));
        return state;
      })
      .addCase(logInUser.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export const action = loginSlice.actions;

export const reducer = loginSlice.reducer;
