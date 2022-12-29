import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyQnaList from "./MyQnaList";

const MyQnaContainer = () => {
  //   const dispatch = useDispatch();
  //   const tempQnaInfoThunk = (num) => dispatch(qnaInfoThunk(num));
  //   const tempQnaPagingThunk = () => dispatch(qnaPagingThunk());

  //   const [color, setColor] = useState(0);
  //   useEffect(() => {
  //     tempQnaInfoThunk(0);
  //     tempQnaPagingThunk();
  //   }, []);
  //   const qnaInfo = useSelector((state) => state.qnaInfo);
  //   const qnaPaging = useSelector((state) => state.qnaPaging);

  //   console.log(qnaInfo, qnaPaging, color);
  return <MyQnaList />;
};

export default MyQnaContainer;
