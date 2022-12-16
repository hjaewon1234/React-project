import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";

const DropDown = ({ arr, refs }) => {
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

// white-space: nowrap;
