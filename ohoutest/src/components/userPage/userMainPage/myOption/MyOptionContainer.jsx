import MyOptionComponent from "./MyOptionComponent";
import uploadFile from "./fileAdd/fileAPI";

const MyOptionContainer = () => {
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);

    await uploadFile(formData);
  };

  return <MyOptionComponent upload={upload} />;
};
export default MyOptionContainer;
