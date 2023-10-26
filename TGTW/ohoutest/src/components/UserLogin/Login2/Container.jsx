import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userInfo.js";
import swal from "sweetalert";

const Login2Container = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const curUser = useSelector((state) => state.userInfo);

  const logout = () => {
    axios({
      url: "/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        navigate("/", { replace: true });
        dispatch(action.setUser({ userId: "", userName: "" }));
      } else if (result.status === 402) {
        swal({
          title: "사용가능한 닉네임입니다.",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      }
    });
  };

  useEffect(() => {
    setUser(curUser);
  }, [curUser]);

  return (
    <>
      <div>
        {isLogin ? (
          <>
            <h3>{user.userName} 님이 로그인했습니다.</h3>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Login2Components></Login2Components>
        )}
      </div>
    </>
  );
};

export default Login2Container;
