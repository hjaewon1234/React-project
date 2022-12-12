import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfoThunk = createAsyncThunk(
  "/userInfo/userInfoThunk",
  async (test) => {
    console.log(test);
    const { data } = await axios.post("http://localhost:8080/api/user", {
      id: "1",
      pw: "2",
      name: "3",
    });
    console.log(data);
    return data;
  }
);

export const getUserThunk = createAsyncThunk(
  "/userInfo/getUserThunk",
  async () => {
    const { data } = await axios.post(
      "http://localhost:8080/api/user/getUsers"
    );
    return data;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { id: "", pw: "", name: "" },
  reducers: {
    setUser: (state, action) => {
      state.userInfo.user = action.payload;
    },
  },
  extraReducers: (bulider) => {
    // 추가적인 리듀서를 작성한다.
    bulider
      .addCase(userInfoThunk.pending, (state, action) => {
        console.log(state.user);
        console.log("pending");
      })
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        console.log(current(state));
        // state = state;
        // state.userInfo.user = action.payload;
        return { ...payload };
      })
      .addCase(userInfoThunk.rejected, (state, action) => {
        console.log("reject");
      });

    bulider
      .addCase(getUserThunk.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        console.log("fulfilled", action.payload);
        return state;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        console.log("reject");
      });
  },
  extraReducers: {
    [userInfoThunk.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", current(state));
      return payload;
    },
  },
});

export const action = userInfoSlice.actions;

export const reducer = userInfoSlice.reducer;
