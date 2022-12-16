import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const animaSpeed = 3;
let animating = false;
let currentItemId;

const MainSlideComponent = () => {
  const container = useRef();
  const innerBox = useRef();
  const btnContainer = useRef();
  const [currentItem, setcurrentItem] = useState(1);
  useEffect(() => {
    clearTimeout(currentItemId);
    currentItemId = setTimeout(() => {
      next();
    }, 3500);
  }, [currentItem]);
  const itemArr = [
    "주말 반짝특가",
    "END SALE",
    "크리스마스 초특가",
    "키친템 특가",
    "디저트 특가",
    "패브릭 세일",
    "인기가구 세일",
    "빠른배송",
    "리퍼마켓",
    "선물 ITEM",
  ];
  const slideItem = ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/"];

  const slideExecuter = (param) => {
    if (container.current) {
      container.current.style.transition = `transform ${animaSpeed / 10}s`;
      container.current.style.transform = `translate(-${param}vw)`;
    }
    setTimeout(() => {
      animating = false;
    }, animaSpeed * 100);
  };

  const blindExecuter = (param) => {
    setTimeout(() => {
      if (container.current) {
        container.current.style.transition = "transform 0s";
        container.current.style.transform = `translate(-${param}vw)`;
      }
      animating = false;
    }, animaSpeed * 100);
    setcurrentItem(param / 100);
  };

  const animator = (key, param) => {
    if (animating) return;
    animating = true;
    switch (key) {
      case "left":
        setcurrentItem((prev) => prev - 1);
        slideExecuter(currentItem * 100 - 100);
        if (currentItem === 1) {
          blindExecuter(1000);
          return;
        }
        return;

      case "right":
        setcurrentItem((prev) => prev + 1);
        slideExecuter(currentItem * 100 + 100);
        if (currentItem === 10) {
          blindExecuter(100);
          return;
        }
        return;

      case "btn":
        setcurrentItem(param);
        slideExecuter(param * 100);
        return;

      default:
        return;
    }
  };

  const prev = () => {
    animator("left");
  };

  const next = () => {
    animator("right");
  };

  const btnSelector = (idx) => {
    console.log(idx);
    animator("btn", idx);
  };

  const intervalStarter = () => {};

  const intervalStopper = () => {};

  return (
    <MainSlideCompBox isTest={true}>
      <div
        className="inner-box"
        ref={innerBox}
        onMouseEnter={intervalStopper}
        onMouseOut={intervalStarter}
      >
        <div className="slide-container" ref={container}>
          <SlideCycle slideItem={slideItem} />
        </div>
      </div>
      <div className="btn-container" ref={btnContainer}>
        {itemArr.map((elem, idx) => {
          return (
            <button
              className={currentItem === idx + 1 ? "current-item" : ""}
              onClick={() => {
                btnSelector(idx + 1);
              }}
              key={`itemArr-${idx}`}
            >
              {elem}
            </button>
          );
        })}
        <div className="slide-btn">
          <button
            onClick={() => {
              prev();
            }}
          >
            <img
              src="/img/chevron-right-solid.svg"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={() => {
              next();
            }}
          >
            <img src="/img/chevron-right-solid.svg" />
          </button>
        </div>
      </div>
    </MainSlideCompBox>
  );
};

const SlideCycle = ({ slideItem }) => {
  return (
    <>
      <Link to={"/"}>
        <img src="/img/mainSlideImg/mainslideimg10.webp" />
      </Link>
      {slideItem.map((elem, idx) => {
        return (
          <Link key={`slideItem - ${idx + 1}`} to={elem}>
            <img src={`/img/mainSlideImg/mainslideimg${idx + 1}.webp`} />
          </Link>
        );
      })}
      <Link to={"/"}>
        <img src="/img/mainSlideImg/mainslideimg1.webp" />
      </Link>
    </>
  );
};

export default MainSlideComponent;

const MainSlideCompBox = styled.div`
  // ${(props) => (props.isTest ? "border: 5px solid black;" : "")}
  width: 100vw;
  .slide-container {
    font-size: 0;
    user-select: none;
    white-space: nowrap;
    /* transform: translate(-100vw); */
    transform: translate(-100vw);
  }
  a {
    display: inline-flex;
  }
  img {
    width: 100%;
  }
  .inner-box {
    overflow: hidden;
  }
  .btn-container {
    display: flex;
    width: 1200px;
    margin: 0 auto;
  }
  .btn-container button {
    font-size: 14px;
    background: none;
    border: 1px solid lightgrey;
    border-right: none;
    border-top: none;
    flex-grow: 1;
    cursor: pointer;
  }
  .btn-container > button:hover {
    background-color: rgb(234, 234, 234);
  }
  .btn-container button:last-child {
    border-right: 1px solid lightgrey;
  }
  .slide-btn {
    width: 70px;
    display: flex;
  }
  .slide-btn button {
    padding: 10px;
  }
  .slide-btn button img {
    vertical-align: middle;
  }
  .current-item {
    background-color: gray !important;
    font-weight: bold;
    color: white;
    cursor: default !important;
    transition: background ${animaSpeed / 10}s;
  }
`;
