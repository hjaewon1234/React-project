import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import QnaComponent from "./QnaComponent";
import { qnaInfoThunk } from "../../../../modules/qnaInfo";
import { qnaPagingThunk } from "../../../../modules/qnaPaging";

const QnaContainer = () => {
  const dispatch = useDispatch();
  const tempQnaInfoThunk = (num) => dispatch(qnaInfoThunk(num));
  const tempQnaPagingThunk = () => dispatch(qnaPagingThunk());

  const [color, setColor] = useState(0);
  useEffect(() => {
    tempQnaInfoThunk(0);
    tempQnaPagingThunk();
  }, []);
  const qnaInfo = useSelector((state) => state.qnaInfo);
  const qnaPaging = useSelector((state) => state.qnaPaging);

  console.log(qnaInfo, qnaPaging, color);
  return (
    <QnaComponent
      title={"리뷰 확인 하기"}
      qnaInfo={qnaInfo}
      qnaPaging={qnaPaging}
      tempQnaInfoThunk={tempQnaInfoThunk}
      color={color}
      setColor={setColor}
    />
  );
};

export default QnaContainer;
