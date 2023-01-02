import MyOptionComponent from "./MyOptionComponent";
import MyPasswordComponent from "./MyPasswordComponent";
import uploadFile from "./fileAdd/fileAPI";
import { useSelector } from "react-redux";

import axios from "axios";
const MyOptionContainer = ({ myList }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);
    formData.append("name", e.target.name.value);
    formData.append("address", e.target.address.value);
    formData.append("address1", e.target.address1.value);
    formData.append("userId", userInfo.userId);

    await uploadFile(formData);
  };
  const passwordChange = async (data, userId) => {
    await axios.post("/api/userPage/passwordChange", {
      data,
      userId,
    });
  };

  return myList ? (
    <MyPasswordComponent passwordChange={passwordChange} userInfo={userInfo} />
  ) : (
    <MyOptionComponent upload={upload} userInfo={userInfo} />
  );
};
export default MyOptionContainer;
