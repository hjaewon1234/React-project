import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as productManageInfoReducer } from "./productManage.js";
import { reducer as registSlice } from "./Slice/registSlice";
import { reducer as loginSlice } from "./Slice/loginSlice";
import { reducer as productPagingReducer } from "./productPaging";
import { reducer as searchReducer } from "./search";
import { reducer as socketReducer } from "./socket";

import { reducer as qnaInfoReducer } from "./qnaInfo";
import { reducer as qnaPagingReducer } from "./qnaPaging";
import { reducer as answerQnaReducer } from "./answerQna";
import { reducer as tempStateChangeReducer } from "./tempStateChange";
export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: productManageInfoReducer,
    userRegist: registSlice,
    userLogin: loginSlice,
    productPaging: productPagingReducer,
    search: searchReducer,
    qnaInfo: qnaInfoReducer,
    qnaPaging: qnaPagingReducer,
    answerQna: answerQnaReducer,
    tempStateChange: tempStateChangeReducer,
    socket: socketReducer,
  },
});
export default store;
