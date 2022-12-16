import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as productManageInfoReducer } from "./productManage.js";
import { reducer as registSlice } from "./Slice/registSlice";
import { reducer as loginSlice } from "./Slice/loginSlice";
import { reducer as productPagingReducer } from "./productPaging";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: productManageInfoReducer,
    userRegist: registSlice,
    userLogin: loginSlice,
    productPaging: productPagingReducer,
  },
});
export default store;
