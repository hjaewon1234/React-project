import FileAddComponent from "./FileAddComponent";
import uploadFile from "./fileComponents/fileAPI";
import axios from "axios";

const FileAddContainer = () => {
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < e.target.file.files.length; i++) {
      formData.append("file", e.target.file.files[i]);
    }
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("brand", e.target.brand.value);

    formData.append("smallsort", e.target.smallsort.value);
    await uploadFile(formData);
  };

  const furnitureArr = [
    "침대",
    "소파",
    "테이블 - 식탁 - 책상",
    "거실장 - TV창",
    "서랍 - 수납장",
    "진열장 - 책장",
    "선반",
    "행거 - 옷장",
    "의자",
    "화장대 - 콘솔",
    "거울",
    "가벽 - 파티션",
    "야외가구",
    "유아동가구",
    "공간별가구",
  ];

  const homeAppArr = [
    "냉장고",
    "TV",
    "세탁기 - 건조기",
    "계절가전",
    "청소기",
    "주방가전",
    "컴퓨터 - 노트북",
  ];

  function homeAppMiddleFunc(value) {
    const refrigeratorArr = [
      "일반냉장고",
      "양문형냉장고",
      "미니냉장고",
      "김치냉장고",
      "와인냉장고",
      "기타냉장고",
      "냉동고",
    ];
    const tvArr = [
      '~109cm(~43")',
      '110~123cm(44~49")',
      '124~163cm(50~64")',
      '164~188cm(65~74")',
      "TV액세서리",
    ];
    const washerArr = [
      "일반세탁기",
      "드럼세탁기",
      "건조기-탈수기",
      "세탁기+건조기",
      "의류관리기",
    ];
    const seasonArr = [
      "전기요-온수매트",
      "가습기",
      "공기청정기",
      "전기히터-온풍기",
      "손난로-발난로",
      "제습기",
      "에어컨",
      "선풍기",
      "해충퇴치기",
      "기타계절가전",
    ];
    const cleanerArr = [
      "일반청소기",
      "로봇청소기",
      "침구청소기",
      "스팀청소기",
      "물걸레청소기",
    ];
    const kitchenArr = [
      "가스레인지-인덕션",
      "오븐-전자레인지",
      "에어프라이어-튀김기",
      "토스터-와플메이커",
      "전기밥솥",
      "전기쿠커",
      "정수기",
      "전기-멀티포트",
      "커피메이커-머신",
      "믹서-착즙기",
      "음식물처리기",
      "식기세척기-건조기",
      "식품건조기",
      "빙수기-제빙기",
      "이유식제조기",
      "수비드머신-진공포장기",
      "반죽-제빵기",
      "간식메이커",
      "기타주방가전",
    ];
    const computerArr = [
      "데스크탑-올인원PC",
      "노트북",
      "마우스",
      "키보드",
      "공유기",
      "PC주변기기",
    ];
    switch (value) {
      case "0":
        return refrigeratorArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "1":
        return tvArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "2":
        return washerArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "3":
        return seasonArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "4":
        return cleanerArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "5":
        return kitchenArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "6":
        return computerArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      default:
        return refrigeratorArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));
    }
  }

  function furnitureMiddleFunc(value) {
    const bedArr = [
      "침대프레임",
      "침대+매트리스",
      "침대부속가구",
      "매트리스",
      "토퍼",
    ];
    const sofaArr = [
      "일반소파",
      "리클라이너",
      "소파베드",
      "좌식소파",
      "소파스툴",
      "거실-소파테이블",
    ];
    const tableArr = ["사이드테이블", "식탁", "책상", "좌식테이블"];
    const livingRoomFurnArr = [
      "일반거실장",
      "높은거실장-사이드보드",
      "TV스탠드",
    ];
    const closetArr = ["수납장", "캐비닛", "주방수납장", "협탁"];
    const showcaseArr = ["진열장-장식장", "책장", "매거진랙"];
    const shelfArr = ["벽선반", "스탠드선반", "앵글-조립식선반"];
    const hangerArr = ["옷장", "붙박이장", "드레스룸", "행거"];
    const chairArr = [
      "인테리어의자",
      "스툴-벤치",
      "빈백",
      "안락의자",
      "흔들의자",
      "학생-사무용의자",
      "게이밍의자",
      "좌식의자-자세보정의자",
      "바체어",
      "발받침",
    ];
    const dressingTableArr = [
      "일반화장대",
      "수납화장대",
      "좌식-미니화장대",
      "접이식화장대",
      "콘솔",
      "화장대+의자",
    ];
    const mirrorArr = ["전신거울", "벽거울", "탁상거울"];
    const partionArr = ["인테리어파티션", "사무용파티션"];
    const outdoorFurnArr = ["야외테이블+의자", "야외의자", "창고-파라솔-기타"];
    const childFurnArr = ["책상", "의자-소파", "놀이가구", "안전문-침대가구"];
    const spaceFurnArr = [
      "거실",
      "침실",
      "주방",
      "옷방-드레스룸",
      "서재-공부방",
      "아이방",
    ];
    switch (value) {
      case "0":
        return bedArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "1":
        return sofaArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "2":
        return tableArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "3":
        return livingRoomFurnArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "4":
        return closetArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "5":
        return showcaseArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "6":
        return shelfArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "7":
        return hangerArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "8":
        return chairArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));
      case "9":
        return dressingTableArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "10":
        return mirrorArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));
      case "11":
        return partionArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "12":
        return outdoorFurnArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));
      case "13":
        return childFurnArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      case "14":
        return spaceFurnArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));

      default:
        return bedArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ));
    }
  }

  const axiosImgFunc = async (files) => {
    await axios.post("http://localhost:8080/api");
  };

  return (
    <FileAddComponent
      title={"상품 추가"}
      upload={upload}
      furnitureArr={furnitureArr}
      homeAppArr={homeAppArr}
      homeAppMiddleFunc={homeAppMiddleFunc}
      furnitureMiddleFunc={furnitureMiddleFunc}
    />
  );
};

export default FileAddContainer;
