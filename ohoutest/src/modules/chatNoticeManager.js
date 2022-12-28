import { createSlice } from "@reduxjs/toolkit";

const chatNoticeManager = createSlice({
  name: "chatNoticeManager",
  initialState: "TGTW에 오신것을 환영합니다.",
  reducers: {
    setChatNoticeManager: (state, action) => {
      const { payload, type } = action;
      console.log(payload);
      return payload;
    },
  },
});

export const action = chatNoticeManager.actions;

export const reducer = chatNoticeManager.reducer;
