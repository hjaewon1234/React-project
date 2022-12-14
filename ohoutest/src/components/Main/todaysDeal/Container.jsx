import TodaysDealComponent from "./Component";

const TodaysDealContainer = () => {
  const itemArr = [];

  const objMaker = (
    image,
    maker,
    productName,
    discountedRate,
    price,
    star,
    review
  ) => {
    const tempObj = {
      image,
      maker,
      productName,
      discountedRate,
      price,
      star,
      review,
    };
    itemArr.push(tempObj);
  };

  objMaker(
    "/img/item/itemPrev1.jpg",
    "일월",
    "[12월13일까지/단독특가] 23년 인기신상! 에어로실버 카본매트(싱글/더블)",
    "58%",
    49000,
    4.5,
    61
  );
  objMaker(
    "/img/item/itemPrev2.jpg",
    "바른닥터",
    "첫눈맞이! 오리집게 스노우볼 메이커 모음전",
    "57%",
    850,
    4.7,
    14
  );
  objMaker(
    "/img/item/itemPrev3.jpg",
    "픽켄드",
    "[오늘의달][단독/NEW한파용!]정말정말 부드러운 두부이불 차렵이불세트 20colors",
    "55%",
    35900,
    4.7,
    5470
  );
  objMaker(
    "/img/item/itemPrev4.jpg",
    "디얼리빙",
    "[오늘의딜] 돌돌이 테이프클리너 10종세트(본체+거치대+긴봉+리필7개)",
    "44%",
    13800,
    4.7,
    2265
  );

  const testArr = [
    { aa: "1_1ㅎㅇ", ab: "1_2ㅎㅇ" },
    { ba: "2_1ㅎㅇ", bb: "2_2ㅎㅇ" },
    { ca: "3_1ㅎㅇ", cb: "3_2ㅎㅇ" },
  ];

  return <TodaysDealComponent itemArr={itemArr} testArr={testArr} />;
};

export default TodaysDealContainer;
