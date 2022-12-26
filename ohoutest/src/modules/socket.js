import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: { socket: "" },
  reducers: {
    setSocket: (state, { payload }) => {
      return payload;
    },
  },
});

export const action = socketSlice.actions;
export const reducer = socketSlice.reducer;
