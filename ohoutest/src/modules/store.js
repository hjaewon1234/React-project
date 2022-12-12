import { configureStore } from "@reduxjs/toolkit";
import { reducer as registSlice } from "./Slice/registSlice";
import { reducer as logInSlice } from "./Slice/loginSlice";

const store = configureStore({
  reducer: { userInfo: registSlice, userLogin: logInSlice },
});

export default store;
