import YesUserCartComp from "./Component";
import { useEffect, useState } from "react";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  useEffect(() => {
    console.log(totalState);
  }, [totalState]);

  const buyOnClick = () => {};

  return (
    <>
      <YesUserCartComp
        totalState={totalState}
        setTotalState={setTotalState}
        buyOnClick={buyOnClick}
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
