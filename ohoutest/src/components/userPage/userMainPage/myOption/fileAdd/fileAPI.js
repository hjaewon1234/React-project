import axios from "axios";

const uploadFile = async (file) => {
  try {
    const { data } = await axios.post("/api/userPage/uploadFile", file);
    window.location.replace("/");
    return data;
  } catch (e) {
    alert("실패함");
    console.log(e);
  }
};

export default uploadFile;
