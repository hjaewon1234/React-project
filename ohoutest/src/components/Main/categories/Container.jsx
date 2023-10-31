import { useRef, useState } from "react";

import CategoriesComponent from "./Component";

const CategoriesContainer = () => {
  const categoriesArr = [
    "데코·식물",
    "가구",
    "패브릭",
    "가전·디지털",
    "주방용품",
    "식품",
    "조명",
    "수납·정리",
    "생활용품",
    "생필품",
    "유아·아동",
    "반려동물",
    "실내운동",
    "캠핑용품",
    "공구·DIY",
    "인테리어시공",
    "렌탈",
  ];
  const [currentItem, setCurrentItem] = useState(1);
  const categoriesRef = useRef();
  const categoriesSlide = (curr, locate) => {
    setCurrentItem(curr);
    categoriesRef.current.style.transform = `translate(-${locate}%)`;
  };
  const left = () => {
    if (currentItem === 3) {
      categoriesSlide(1, 0);
    } else if (currentItem === 6) {
      categoriesSlide(1, 0);
    } else if (currentItem === 8) {
      categoriesSlide(3, 30);
    }
  };
  const right = () => {
    if (currentItem === 1) {
      categoriesSlide(6, 50);
    } else if (currentItem === 3) {
      categoriesSlide(8, 70);
    } else if (currentItem === 6) {
      categoriesSlide(8, 70);
    }
  };

  return (
    <CategoriesComponent
      categoriesArr={categoriesArr}
      categoriesRef={categoriesRef}
      left={left}
      right={right}
      currentItem={currentItem}
    />
  );
};

export default CategoriesContainer;
