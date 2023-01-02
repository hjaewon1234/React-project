import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfoThunk = createAsyncThunk(
  "/userInfo/userInfoThunk",
  async (test) => {
    const { data } = await axios.post("/api/user", {
      id: "1",
      pw: "2",
      name: "3",
    });
    return data;
  }
);

export const getUserThunk = createAsyncThunk(
  "/userInfo/getUserThunk",
  async () => {
    const { data } = await axios.post("/api/user/getUsers");
    return data;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { userId: "", userName: "" },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(userInfoThunk.pending, (state, action) => {})
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        state = state;
        state.userInfo.user = action.payload;
        return { ...payload };
      })
      .addCase(userInfoThunk.rejected, (state, action) => {});

    bulider
      .addCase(getUserThunk.pending, (state, action) => {})
      .addCase(getUserThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getUserThunk.rejected, (state, action) => {});
  },
});

export const action = userInfoSlice.actions;

export const reducer = userInfoSlice.reducer;
