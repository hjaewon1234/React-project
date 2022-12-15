import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as productManageInfoReducer } from "./productManage.js";
import { reducer as registSlice } from "./Slice/registSlice";
import { reducer as logInSlice } from "./Slice/loginSlice";
import { reducer as productPagingReducer } from "./productPaging";
import { reducer as searchReducer } from "./search";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: productManageInfoReducer,
    userRegist: registSlice,
    userLogin: logInSlice,
    productPaging: productPagingReducer,
    search: searchReducer,
  },
});
export default store;
