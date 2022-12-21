// import { useState } from "react";
// // import { useDispatch } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const LoginComponents = ({ setIsLogin, setUser }) => {
//   const [userId, setId] = useState("");
//   const [userPw, setPw] = useState("");

//   const Login = () => {
//     axios({
//       url: "http://localhost:8080/login",
//       method: "POST",
//       withCredentials: true,
//       data: {
//         userId: userId,
//         userPw: userPw,
//       },
//     }).then((result) => {
//       if (result.status === 200) {
//         window.open("/", "_self");
//       }
//     });
//   };

//   return (
//     <div>
//       <label> 아이디</label>
//       <input
//         type={"text"}
//         value={userId}
//         onInput={(e) => {
//           setId(e.target.value);
//         }}
//         placeholder={"아이디"}
//       />
//       <input
//         type={"password"}
//         value={userPw}
//         onInput={(e) => {
//           setPw(e.target.value);
//         }}
//         placeholder={"비밀번호"}
//       />
//       <label> 비밀번호</label>
//       <button onClick={Login} className="loginButton">
//         로그인
//       </button>
//     </div>
//   );
// };

// export default LoginComponents;

// const RegistTopStlye = styled.div``;
// const RegistMidStlye = styled.div``;
// const AcceptStlye = styled.div``;
