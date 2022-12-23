import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import styled from "styled-components";

const DropDown = ({ arr, refs, setIsOpen, imgRef, logOutFunc }) => {
  const handler = ({ target }) => {
    if (!refs.current?.contains(target) && !imgRef.current?.contains(target)) {
      setIsOpen((prev) => !prev);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <DropDownBox className="drop-container" ref={refs}>
      <ul className="drop-ul">
        {arr.map((elem) => {
          return (
            <li
              key={`${arr} - ${nanoid()}`}
              className="drop-item"
              onClick={() => {
                switch (elem) {
                  case "로그아웃":
                    setIsOpen((prev) => !prev);
                    logOutFunc();
                    return;
                  case "마이페이지":
                    return;
                }
              }}
            >
              {elem}
            </li>
          );
        })}
      </ul>
    </DropDownBox>
  );
};

export default DropDown;

const DropDownBox = styled.div`
  background-color: #f4f4f4;

  .drop-ul {
    list-style: none;
  }
  .drop-item {
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
  }
`;

// @keyframes, animation
