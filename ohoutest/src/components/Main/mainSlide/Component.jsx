import styled from "styled-components";
import { Link } from "react-router-dom";

import { useRef, useState } from "react";

const MainSlideComponent = () => {
  const container = useRef();
  const innerBox = useRef();
  const btnContainer = useRef();
  let currentItem = 1;
  let animating = false;
  const animaSpeed = 5;
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

  const selector = (handler) => {
    if (animating) return;
    animating = true;
    if (handler) {
      currentItem++;
      if (currentItem === 11) {
        animator();
        setTimeout(() => {
          animator(100);
          currentItem = 1;
          animating = false;
        }, animaSpeed * 100);
      } else {
        animator();
      }
    } else {
      currentItem--;
      if (currentItem === 0) {
        animator();
        setTimeout(() => {
          animator(1000);
          currentItem = 10;
          animating = false;
        }, animaSpeed * 100);
      } else {
        animator();
      }
    }
  };

  const animator = (aug) => {
    if (!aug) {
      const temp = currentItem * 100;
      container.current.style.transition = `transform ${animaSpeed / 10}s`;
      container.current.style.transform = `translate(-${temp}vw)`;
      setTimeout(() => {
        animating = false;
      }, animaSpeed * 100);
    } else {
      container.current.style.transition = "transform 0s";
      container.current.style.transform = `translate(-${aug}vw)`;
      animating = false;
    }
  };

  const btnSelector = (idx) => {
    if (animating) return;
    animating = true;
    currentItem = idx + 1;
    animator();
  };

  const prev = () => {
    selector(false);
  };
  const next = () => {
    selector(true);
  };

  const autoSlider = setInterval(() => {
    console.log("인터벌작동");
    next();
  }, 3500);

  const intervalStarter = () => {
    // const autoSlider = setInterval(() => {
    //   console.log("인터벌작동");
    //   next();
    // }, 3500);
  };

  const intervalStopper = () => {
    // clearInterval(autoSlider);
  };

  // const myInterval = () => {
  //   for (let delay = 0; delay < 35; delay++) {
  //     setTimeout(() => {
  //       console.log(delay);
  //     }, 100 * delay);
  //   }
  // };
  // myInterval();

  return (
    <MainSlideCompBox>
      <div
        className="inner-box"
        ref={innerBox}
        onMouseOver={intervalStopper}
        onMouseOut={intervalStarter}
      >
        <div className="slide-container" ref={container}>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg10.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg1.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg2.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg3.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg4.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg5.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg6.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg7.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg8.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg9.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg10.webp" />
          </Link>
          <Link to={"/"}>
            <img src="/img/mainSlideImg/mainslideimg1.webp" />
          </Link>
        </div>
      </div>
      <div className="btn-container" ref={btnContainer}>
        {itemArr.map((elem, idx) => {
          return (
            <button
              onClick={() => {
                btnSelector(idx);
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

export default MainSlideComponent;

const MainSlideCompBox = styled.div`
  width: 100vw;
  .slide-container {
    font-size: 0;
    user-select: none;
    white-space: nowrap;
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
`;
