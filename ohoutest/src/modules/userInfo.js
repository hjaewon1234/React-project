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
    // setLogOut(state) {
    //   console.log(state);
    //   return state;
    // },
  },
  extraReducers: (bulider) => {
    // 추가적인 리듀서를 작성한다.
    bulider
      .addCase(userInfoThunk.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        state = state;
        state.userInfo.user = action.payload;
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
        return state;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        console.log("reject");
      });
  },
  // extraReducers: {
  //   [userInfoThunk.fulfilled]: (state, { payload }) => {
  //     console.log("fullfilled", current(state));
  //     return payload;
  //   },
  // },
});

export const action = userInfoSlice.actions;

export const reducer = userInfoSlice.reducer;
