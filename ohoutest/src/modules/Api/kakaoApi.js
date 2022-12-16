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

    console.log(props.popup);
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

// const KakaoStyle = styled.div`
//   position: fixed;
//   top: -100vh;
//   left: -100vw;
//   width: 200vw;
//   height: 200vh;
//   z-index: 3;
//   background-color: rgba(0, 0, 0, 0);
//   .postmodal {
//     background: rgba(0, 0, 0, 0.5);
//     position: fixed;
//     top: 25%;
//     bottom: 25%;
//     left: 25%;
//     right: 25%;
//     width: 50% !important;
//     height: 50% !important;
//   }
// `;

const KakaoStyle = styled.div`
  .postmodal {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
`;
