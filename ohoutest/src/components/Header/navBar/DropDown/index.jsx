import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/userInfo.js";

const DropDown = ({ arr, refs, isOpen, setIsOpen, imgRef }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handler = ({ target }) => {
    if (!refs.current?.contains(target) && !imgRef.current?.contains(target)) {
      setIsOpen(!isOpen);
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
                    setIsOpen(!isOpen);
                    axios({
                      url: "http://localhost:8080/logout",
                      method: "POST",
                      withCredentials: true,
                    }).then((result) => {
                      if (result.status === 200) {
                        navigate("/", { replace: true });
                        dispatch(action.setUser({ userId: "", userName: "" }));
                      }
                    });
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
`;

// @keyframes, animation
