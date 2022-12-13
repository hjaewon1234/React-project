import { configureStore } from "@reduxjs/toolkit";
import { reducer as userInfoReducer } from "./userInfo";
import { reducer as productManageInfoReducer } from "./productManage.js";
import { reducer as registSlice } from "./Slice/registSlice";
import { reducer as logInSlice } from "./Slice/loginSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    productManageInfo: productManageInfoReducer,
    userRegist: registSlice,
    userLogin: logInSlice,
  },
});
export default store;
