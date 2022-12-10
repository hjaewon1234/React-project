import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as ProductManageInfoReducer } from "./productManage";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: ProductManageInfoReducer,
  },
});
