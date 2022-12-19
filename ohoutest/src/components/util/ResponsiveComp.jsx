import styled from "styled-components";
import { useEffect, useState } from "react";

// 1440px 1024px 768px 425px
const ResponsiveComp = (Elem) => {
  const [resize, setResize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });
  }, []);

  useEffect(() => {}, [resize]);

  const comp = () => {
    return (
      <MainBox>
        <XLBox WIDTH={resize}>{Elem}</XLBox>
      </MainBox>
    );
  };

  return comp();
};

export default ResponsiveComp;

const MainBox = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  color: #f4f4f4;
`;
const XLBox = styled.div`
    margin:auto;
    width: ${({ WIDTH }) => {
      if (WIDTH >= 1440) {
        return "1440px";
      } else if (WIDTH >= 1024) {
        return "1024px";
      } else if (WIDTH >= 768) {
        return "768px";
      } else {
        return "425px";
      }
    }}};
  background-color: #1A1C20;
`;
