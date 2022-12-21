import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
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
  console.log(body);
  // const navigate = useNavigate();
  const { data } = await axios

    .post("http://localhost:8080/api/user/getUsers", {
      ...body,
      body: JSON.stringify(body),
    })
    .catch((error) => {
      console.log(error);
    })
    .then((data) => {
      console.log(data.data);
      if (data.data.status == 401) {
        swal("중복되는 아이디가 있습니다. 다시 확인해주세요", {
          buttons: {
            확인: true,
          },
        });
      } else if (data.data.status == 402) {
        alert("비밀번호 입력을 다시 확인해주세요");
      } else if (data.data.status == 403) {
        swal("중복되는 닉네임이 있습니다. 다시 확인해주세요", {
          buttons: {
            확인: true,
          },
        });
      } else if (data.data.status == 405) {
        alert("아이디 영문으로만 입력 해주세요");
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

        // navigate("/", { replace: true });
      } else {
      }
    });
  console.log(data);
  return data;
});
// axios.post("경로", {담아서 보낼 데이터})

export const overlapId = createAsyncThunk(
  "/user/overlapId",
  async (inputId) => {
    console.log(inputId, JSON.stringify(inputId.inputId));
    const { data } = await axios.post(
      "http://localhost:8080/api/user/overlapId",
      {
        inputId: JSON.stringify(inputId.inputId),
      }
    );
    // .then((data) => {
    if (data.status == 401) {
      swal({
        title: "중복되는 아이디가 있습니다. 다른 아이디를 사용하세요",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else if (data.status == 402) {
      alert("비밀번호가 정장적으로 입력이 되지 않았습니다. 다시 확인해주세요");
    } else if (data.status == 403) {
      alert("중복되는 닉네임이 있습니다. 다시 확인해주세요");
    } else if (data.status == 405) {
      alert("아이디 영문으로만 입력 해주세요");
    } else if (data.status == 200) {
      swal({
        title: "사용가능한 아이디입니다.",
        showCancelButton: true,
        confirmButtonColor: "#F0A500",
        confirmButtonText: "확인",
      });
    } else {
    }
    // });
    console.log("data", data);
    return data;
  }
);

export const overlapNickName = createAsyncThunk(
  "/user/overlapNickName",
  async (inputName) => {
    const { data } = await axios
      .post("http://localhost:8080/api/user/overapNickName", {
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
  extraReducers: (bulider) => {
    // 회원가입
    bulider
      .addCase(signUpUser.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        console.log("fulfilled", payload);
        console.log(current(state));
        return { ...payload };
      })
      .addCase(signUpUser.rejected, (state, action) => {
        console.log("rejected");
      })

      // 중복ID

      .addCase(overlapId.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(overlapId.fulfilled, (state, { payload }) => {
        console.log("fulfilled", payload);
        console.log(current(state));
        return { ...payload };
      })
      .addCase(overlapId.rejected, (state, action) => {
        console.log("rejected");
      })

      .addCase(overlapNickName.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(overlapNickName.fulfilled, (state, { payload }) => {
        console.log("fulfilled", payload);
        console.log(current(state));
        return { ...payload };
      })
      .addCase(overlapNickName.rejected, (state, action) => {
        console.log("rejected");
      });
    // 중복NickName ///////////////////
  },
});

export const action = registSlice.actions;

export const reducer = registSlice.reducer;
