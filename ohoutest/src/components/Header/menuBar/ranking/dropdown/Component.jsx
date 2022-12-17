import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { action } from "../../../../../modules/search";
import useDidMountEffect from "../../../../util/useDidMountEffect";

let dropdownElems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// rankDb에서 rank 가져오기
axios.post("/api/product/getTopten").then((data) => {
  data.data.map((item, index) => {
    dropdownElems[index] = item.productName;
  });
});
export const DropdownComp = () => {
  const [mouseEnter, setMouseEnter] = useState("");
  const [selected, setSelected] = useState("1");
  const [selected2, setSelected2] = useState("2");
  const [elemCount, setElemCount] = useState(0);
  const [transYAnim, setTransYAnim] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {}, [mouseEnter]);

  let timeoutId1;
  let timeoutId2;
  useEffect(() => {
    clearTimeout(timeoutId1);
    setTransYAnim(() => "");
    timeoutId1 = setTimeout(() => {
      setElemCount((state) => (state + 1) % 10);
    }, 1000);
  }, [selected]);

  useDidMountEffect(() => {
    clearTimeout(timeoutId2);
    setSelected(() => dropdownElems[elemCount]);
    setSelected2(() => dropdownElems[(elemCount + 1) % 10]);
    timeoutId2 = setTimeout(() => {
      setTransYAnim(() => "transYAnim");
    }, 500);
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
      {selected == "1" ? (
        <></>
      ) : (
        <>
          <div className={`${mouseEnter == "hover" ? "selected " + "" : ""} `}>
            <div className={transYAnim}>
              <span>{elemCount + 1} </span>
              <img className={"up"} src="/api/downloadcaretupsolid.png" />
              <p>{` ${selected}`}</p>
            </div>
            <div className={transYAnim}>
              <span>
                {(elemCount + 2) % 10 != 0 ? (elemCount + 2) % 10 : 10}{" "}
              </span>
              <img className={"up"} src="/api/downloadcaretupsolid.png" />
              <p>{` ${selected2}`}</p>
            </div>
          </div>
          <ul>
            <li>인기제품순위</li>
            {dropdownElems.map((item, index) => (
              <li
                key={`dropdownElemKey-${index}`}
                onClick={() => {
                  dispatch(action.setSword(item));
                  navigator("/search/" + item);
                }}
              >
                <div className="rankDropdownList">
                  <span>{index + 1} </span>
                  <img
                    className={"down"}
                    src="/api/downloadcaretdownsolid.png"
                  />
                </div>{" "}
                {` ${item}`}
              </li>
            ))}
          </ul>
        </>
      )}
    </DropBox>
  );
};

const DropBox = styled.div`
  padding: 5px 0px 24px 20px;
  width: 500px;
  height: 34px;
  background-color: #f4f4f4;
  border-radius: 5px;
  overflow-y: hidden;
  overflow-x: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  & > div > div {
    display: flex;
    align-items: center;
    height: 30px;
    column-gap: 15px;
    justify-content: right;
  }
  & > div > div > p {
    white-space: nowrap;
    overflow-x: hidden;
    color: #1a1c20;
  }

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
    animation: translateY 0.65s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rankDropdownList {
    display: flex;
    column-gap: 15px;
  }
  .rankDropdownList :first-child {
    width: 20px;
  }

  ul {
    position: absolute;
    display: none;
    right: 0px;
    width: 480px;
    top: 30px;
    list-style-type: none;
    width: inherit;
  }
  .selected + ul {
    display: block;
  }
  ul > li {
    display: flex;
    justify-content: space-between;
    height: 50px;
    white-space: nowrap;
    overflow: hidden;
    column-gap: 10px;
    padding-left: 20px;
    padding: 10px 0px 10px 20px;
    background-color: #f4f4f4d3;
    z-index: 2;
    color: #1a1c20;
    width: inherit;
    align-items: center;
    span {
      font-weight: 600;
    }
    cursor: pointer;
  }
  ul > li:first-child {
    width: 100%;
    justify-content: right;
    padding-right: 10px;
    padding-top: 20px;
    font-weight: 600;
    border-bottom: 1px solid #1a1c205c;
  }
  ul > li:not(:first-child):hover {
    background-color: #1a1c205c;
    color: #f4f4f4;
  }

  @keyframes translateY {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-60px);
    }
  }
`;
