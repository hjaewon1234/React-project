import axios from "axios";

const uploadFile = async (file) => {
  try {
    const { data } = await axios.post("/api/manager/uploadFile", file);
    return data;
  } catch (e) {
    alert("실패함");
  }
};

export default uploadFile;
