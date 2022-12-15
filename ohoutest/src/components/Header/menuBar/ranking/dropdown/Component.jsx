import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

let dropdownElems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// rankDb에서 rank 가져오기
axios.post("http://localhost:8080/api/product/getTopten").then((data) => {
  data.data.map((item, index) => {
    dropdownElems[index] = item.productName;
  });
});
export const DropdownComp = () => {
  const [mouseEnter, setMouseEnter] = useState("");
  const [selected, setSelected] = useState("1");
  const [elemCount, setElemCount] = useState(0);
  const [transYAnim, setTransYAnim] = useState("");

  useEffect(() => {}, [mouseEnter]);

  useEffect(() => {
    setTransYAnim(() => "");
    setTimeout(() => {
      setElemCount((state) => (state + 1) % 10);
    }, 1000);
    setTimeout(() => {
      setTransYAnim(() => "transYAnim");
    }, 500);
  }, [selected]);

  useEffect(() => {
    setSelected(() => dropdownElems[elemCount]);
  }, [elemCount]);

  return (
    <DropBox
      onMouseEnter={() => {
        setMouseEnter((state) => "hover");
      }}
      onMouseLeave={() => {
        setMouseEnter((state) => "");
      }}
    >
      <div
        className={`${
          mouseEnter == "hover" ? "selected " + transYAnim : transYAnim
        } `}
      >
        <span>{elemCount + 1} </span>
        <img className={"up"} src="./img/caret-up-solid.svg" />
        {` ${selected}`}
      </div>
      <ul>
        {dropdownElems.map((item, index) => (
          <li key={`dropdownElemKey-${index}`}>
            <span>{index} </span>
            <img className={"down"} src="./img/caret-down-solid.svg" />{" "}
            {` ${item}`}
          </li>
        ))}
      </ul>
    </DropBox>
  );
};

const DropBox = styled.div`
  padding: 5px 20px 15px 20px;
  width: 200px;
  background-color: #f4f4f4;
  border-radius: 5px;
  overflow-y: hidden;

  span {
    font-weight: 600;
  }
  img {
    width: 10px;
  }
  img.down {
    filter: invert(7%) sepia(100%) saturate(7104%) hue-rotate(245deg)
      brightness(121%) contrast(132%);
  }
  img.up {
    filter: invert(14%) sepia(84%) saturate(7229%) hue-rotate(2deg)
      brightness(100%) contrast(115%);
  }

  .transYAnim {
    animation: translateY 0.5s;
  }

  .selected {
  }

  ul {
    position: absolute;
    display: none;
    right: 315px;
    width: 180px;
    margin-top: 10px;
    list-style-type: none;
  }
  .selected + ul {
    display: block;
  }
  ul > li {
    display: flex;
    column-gap: 10px;
    padding-left: 20px;
    padding: 10px 0px 10px 20px;
    background-color: #f4f4f4;
    z-index: 2;
    color: #1a1c20;
    width: inherit;

    span {
      font-weight: 600;
    }
  }

  @keyframes translateY {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-30px);
    }
  }
`;
