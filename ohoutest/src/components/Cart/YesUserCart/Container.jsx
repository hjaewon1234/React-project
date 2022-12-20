import YesUserCartComp from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  useEffect(() => {
    console.log(totalState);
  }, [totalState]);

<<<<<<< HEAD
  const buyOnClick = () => {
    axios.post("/api/order/buy", { id: 1, user: userInfo }).then(({ data }) => {
      console.log(data);
    });
  };
=======
  const buyOnClick = () => {};
>>>>>>> 60f218a (rebase test)

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
