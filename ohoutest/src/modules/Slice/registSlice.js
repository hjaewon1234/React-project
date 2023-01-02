import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axios from "axios";

const initialState = {
  inputId: "",
  inputPw: "",
  inputPw1: "",
  inputName: "",
  inputAdress: "",
  inputAdress1: "",
};

export const signUpUser = createAsyncThunk("/user/signUpUser", async (body) => {
  const { data } = await axios
    .post("/api/user/getUsers", {
      ...body,
      body: JSON.stringify(body),
    })
    .catch((error) => {})
    .then((data) => {
      if (data.data.status == 401) {
        swal({
          title: "중복되는 아이디가 있습니다. 다시 확인해주세요",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      } else if (data.data.status == 402) {
        swal({
          title: "비밀번호 입력을 다시 확인해주세요",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      } else if (data.data.status == 403) {
        swal({
          title: "중복되는 닉네임이 있습니다. 다시 확인해주세요",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      } else if (data.data.status == 405) {
        swal({
          title: "아이디 영문으로만 입력 해주세요",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      } else if (data.data.status == 200) {
        swal({
          title: "회원가입이 완료 되었습니다.",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
        setTimeout(() => {
          window.open("/", "_self");
        }, 1500);
      } else {
      }
    });
  return data;
});

export const overlapId = createAsyncThunk(
  "/user/overlapId",
  async (inputId) => {
    const { data } = await axios.post("/api/user/overlapId", {
      inputId: JSON.stringify(inputId.inputId),
    });
    if (data.status == 401) {
      swal({
        title: "중복되는 아이디가 있습니다. 다른 아이디를 사용하세요",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else if (data.status == 402) {
      swal({
        title:
          "비밀번호가 정장적으로 입력이 되지 않았습니다. 다시 확인해주세요",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else if (data.status == 403) {
      swal({
        title: "중복되는 닉네임이 있습니다. 다시 확인해주세요",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else if (data.status == 405) {
      swal({
        title: "아이디는 영문으로만 입력 해주세요",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else if (data.status == 200) {
      swal({
        title: "사용가능한 아이디입니다.",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else {
    }
    return data;
  }
);

export const overlapNickName = createAsyncThunk(
  "/user/overlapNickName",
  async (inputName) => {
    const { data } = await axios
      .post("/api/user/overapNickName", {
        inputName: JSON.stringify(inputName.inputName),
      })
      .then((data) => {
        if (data.data.status == 401) {
          swal({
            title: "중복되는 닉네임이 있습니다. 다른 닉네임을 사용하세요",
            showCancelButton: true,
            confirmButtonColor: "#F0A500",
            confirmButtonText: "확인",
          });
        } else if (data.data.status == 200) {
          swal({
            title: "사용가능한 닉네임입니다.",
            showCancelButton: true,
            confirmButtonColor: "#F0A500",
            confirmButtonText: "확인",
          });
        }
      });

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
  extraReducers: (bulider) => {
    bulider
      .addCase(signUpUser.pending, (state, action) => {})
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        return { ...payload };
      })
      .addCase(signUpUser.rejected, (state, action) => {})

      .addCase(overlapId.pending, (state, action) => {})
      .addCase(overlapId.fulfilled, (state, { payload }) => {
        return { ...payload };
      })
      .addCase(overlapId.rejected, (state, action) => {})

      .addCase(overlapNickName.pending, (state, action) => {})
      .addCase(overlapNickName.fulfilled, (state, { payload }) => {
        return { ...payload };
      })
      .addCase(overlapNickName.rejected, (state, action) => {});
  },
});

export const action = registSlice.actions;

export const reducer = registSlice.reducer;
