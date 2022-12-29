import axios from "axios";
import { apiClient } from "./appClient";

const uploadFile = async (file) => {
  try {
    const { data } = await axios.post("/api/manager/uploadFile", file);
    return data;
  } catch (e) {
    alert("실패함");
    console.log(e);
  }
};

export default uploadFile;
