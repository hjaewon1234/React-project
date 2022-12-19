import FileAddComponent from "./FileAddComponent";
import uploadFile from "./fileComponents/fileAPI";

const FileAddContainer = () => {
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);

    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("brand", e.target.brand.value);

    await uploadFile(formData);
  };
  // FormData 객체를 생성하여 form에서 선택한 파일을 append 해주고 있음.
  // FormData는 ajax로 form data 전송을 해주는 객체인데 지금과 같이 form 전속이
  // 필요한 경우 사용한다.
  // 이렇게 호출된 uploadFile은 사용자가 선택한 파일을 담은
  // formData 객체를 서버에 보내게 된다.

  return <FileAddComponent title={"상품 추가"} upload={upload} />;
};

export default FileAddContainer;
