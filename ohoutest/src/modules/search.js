import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { sword: "" },
  reducers: {
    setSword: (state, { payload }) => {
      state.sword = payload;
    },
  },
});

export const action = searchSlice.actions;
export const reducer = searchSlice.reducer;
