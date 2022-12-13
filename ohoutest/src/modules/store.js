import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as productManageInfoReducer } from "./productManage";
import { reducer as productPagingReducer } from "./productPaging";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: productManageInfoReducer,
    productPaging: productPagingReducer,
  },
});
