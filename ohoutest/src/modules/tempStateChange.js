import { createSlice } from "@reduxjs/toolkit";

const tempStateChange = createSlice({
  name: "tempStateChange",
  initialState: true,
  reducers: {
    setTempStateChange: (state, action) => {
      state = false;
    },
  },
});

export const action = tempStateChange.actions;

export const reducer = tempStateChange.reducer;
