import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import { useEffect } from "react";

const DropDown = ({ arr, refs, isOpen, setIsOpen, imgRef }) => {
  const handler = ({ target }) => {
    if (!refs.current?.contains(target) && !imgRef.current?.contains(target)) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handler);
  }, []);

  return (
    <DropDownBox className="drop-container" ref={refs}>
      <ul className="drop-ul">
        {arr.map((elem) => {
          return (
            <li key={`${arr} - ${nanoid()}`} className="drop-item">
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
`;
