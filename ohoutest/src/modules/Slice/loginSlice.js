// import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   inputId: "",
//   inputPw: "",
// };

// export const logInUser = createAsyncThunk("logInUser", async (body) => {
//   console.log(body);
//   const { data } = await axios.post("http://localhost:8080/api/user/getUsers", {
//     ...body,
//     body: JSON.stringify(body),
//   });
//   console.log(data);
//   return data;
// });
// // axios.post("경로", {담아서 보낼 데이터})

// const logInSlice = createSlice({
//   name: "userLogin",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.userInfo.user = action.payload;
//     },
//   },
//   extraReducers: {
//     [logInSlice.pending]: (state, action) => {
//       console.log("pending");
//     },
//     [logInSlice.fulfilled]: (state, { payload }) => {
//       console.log("fulfilled", payload);
//       console.log(current(state));
//       return payload;
//     },
//     [logInSlice.rejected]: (state, action) => {
//       console.log("rejected");
//     },
//   },
// });

// export const action = logInSlice.actions;

// export const reducer = logInSlice.reducer;
