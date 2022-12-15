import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  inputId: "",
  inputPw: "",
  inputPw1: "",
  inputName: "",
  inputAdress: "",
  inputAdress1: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  console.log(body);
  const { data } = await axios
    .post("http://localhost:8080/api/user/getUsers", {
      ...body,
      body: JSON.stringify(body),
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(data);
  return data;
});
// axios.post("경로", {담아서 보낼 데이터})

export const overlapId = createAsyncThunk("overlapId", async (body) => {
  console.log(body);
  const { data } = await axios
    .post("http://localhost:8080/api/user/overlapId", {
      ...body.inputId,
      body: JSON.stringify(body.inputId),
    })
    .then((userId) => {
      if (userId.inputId) {
        alert("이미 아이디 있음");
      } else {
        alert("이미 아이디 없음");
      }
    });
  console.log(data);
  return data;
});

export const overlapNickName = createAsyncThunk(
  "overlapNickName",
  async (body) => {
    console.log(body);
    const { data } = await axios
      .post("http://localhost:8080/api/user/overapNickName", {
        ...body.inputName,
        body: JSON.stringify(body.inputName),
      })
      .then((userName) => {
        if (userName.inputName) {
          alert("이미 닉네임 있음");
        } else {
          alert("이미 아이디 없음");
        }
      });

    console.log(data);
    return data;
  }
);

const registSlice = createSlice({
  name: "userRegist",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userRegist.user = action.payload;
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      console.log("pending");
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      console.log(current(state));
      return payload;
    },
    [signUpUser.rejected]: (state, action) => {
      console.log("rejected");
    },
    // 회원가입 //////////////////////////////

    // 중복Id //////////////////////////////
    [overlapId.pending]: (state, action) => {
      console.log("pending");
    },
    [overlapId.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      console.log(current(state));
      return payload;
    },
    [overlapId.rejected]: (state, action) => {
      console.log("rejected");
    },
    // 중복NickName ///////////////////

    [overlapNickName.pending]: (state, action) => {
      console.log("pending");
    },
    [overlapNickName.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      console.log(current(state));
      return payload;
    },
    [overlapNickName.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const action = registSlice.actions;

export const reducer = registSlice.reducer;
