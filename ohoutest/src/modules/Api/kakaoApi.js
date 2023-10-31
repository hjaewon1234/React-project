import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const Post = (props) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <div>
      <KakaoStyle>
        <DaumPostcode
          className="postmodal"
          autoClose
          onComplete={complete}
        ></DaumPostcode>
      </KakaoStyle>
    </div>
  );
};

export default Post;

const KakaoStyle = styled.div`
  .postmodal {
    position: sticky;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
`;
