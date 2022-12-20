import YesUserCartComp from "./Component";
import { useEffect, useState } from "react";

const YesUserCartContainer = ({}) => {
  const [totalState, setTotalState] = useState([]);

  useEffect(() => {
    console.log(totalState);
  }, [totalState]);

  return (
    <>
      <YesUserCartComp
        totalState={totalState}
        setTotalState={setTotalState}
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
