import { createSlice } from "@reduxjs/toolkit";

const tempStateChange = createSlice({
  name: "tempStateChange",
  initialState: 0,
  reducers: {
    setTempStateChange: (state, action) => {
      const { payload, type } = action;
      state = payload;
    },
  },
});

export const action = tempStateChange.actions;

export const reducer = tempStateChange.reducer;
