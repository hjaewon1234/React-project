// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

import MainSlideComponent from "./Component";

const MainSlideContainer = () => {
  // const animaSpeed = 3;
  // let animating = false;
  // let currentItemId;

  // const container = useRef();
  // const innerBox = useRef();
  // const btnContainer = useRef();
  // const [currentItem, setcurrentItem] = useState(1);
  // useEffect(() => {
  //   clearTimeout(currentItemId);
  //   currentItemId = setTimeout(() => {
  //     next();
  //   }, 3500);
  // }, [currentItem]);
  // const itemArr = [
  //   "주말 반짝특가",
  //   "END SALE",
  //   "크리스마스 초특가",
  //   "키친템 특가",
  //   "디저트 특가",
  //   "패브릭 세일",
  //   "인기가구 세일",
  //   "빠른배송",
  //   "리퍼마켓",
  //   "선물 ITEM",
  // ];
  // const slideItem = ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/"];

  // const slideExecuter = (param) => {
  //   container.current.style.transition = `transform ${animaSpeed / 10}s`;
  //   container.current.style.transform = `translate(-${param}vw)`;
  //   setTimeout(() => {
  //     animating = false;
  //   }, animaSpeed * 100);
  // };

  // const blindExecuter = (param) => {
  //   setTimeout(() => {
  //     container.current.style.transition = "transform 0s";
  //     container.current.style.transform = `translate(-${param}vw)`;
  //     animating = false;
  //   }, animaSpeed * 100);
  //   setcurrentItem(param / 100);
  // };

  // const animator = (key, param) => {
  //   if (animating) return;
  //   animating = true;
  //   switch (key) {
  //     case "left":
  //       setcurrentItem((prev) => prev - 1);
  //       slideExecuter(currentItem * 100 - 100);
  //       if (currentItem === 1) {
  //         blindExecuter(1000);
  //         return;
  //       }
  //       return;

  //     case "right":
  //       setcurrentItem((prev) => prev + 1);
  //       slideExecuter(currentItem * 100 + 100);
  //       if (currentItem === 10) {
  //         blindExecuter(100);
  //         return;
  //       }
  //       return;

  //     case "btn":
  //       setcurrentItem(param);
  //       slideExecuter(param * 100);
  //       return;

  //     default:
  //       return;
  //   }
  // };

  // const prev = () => {
  //   animator("left");
  // };

  // const next = () => {
  //   animator("right");
  // };

  // const btnSelector = (idx) => {
  //   animator("btn", idx);
  // };

  // const intervalStarter = () => {};

  // const intervalStopper = () => {};

  // const SlideCycle = () => {
  //   return (
  //     <>
  //       <Link to={"/"}>
  //         <img src="/img/mainSlideImg/mainslideimg10.webp" />
  //       </Link>
  //       {slideItem.map((elem, idx) => {
  //         return (
  //           <Link key={`slideItem - ${idx + 1}`} to={elem}>
  //             <img src={`/img/mainSlideImg/mainslideimg${idx + 1}.webp`} />
  //           </Link>
  //         );
  //       })}
  //       <Link to={"/"}>
  //         <img src="/img/mainSlideImg/mainslideimg1.webp" />
  //       </Link>
  //     </>
  //   );
  // };

  return <MainSlideComponent />;
};

export default MainSlideContainer;
