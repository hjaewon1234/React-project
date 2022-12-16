import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import QnaComponent from "./QnaComponent";
import { qnaInfoThunk } from "../../../../modules/qnaInfo";
import { qnaPagingThunk } from "../../../../modules/qnaPaging";

const QnaContainer = () => {
  const dispatch = useDispatch();
  const tempQnaInfoThunk = (num) => dispatch(qnaInfoThunk(num));
  const tempQnaPagingThunk = () => dispatch(qnaPagingThunk());
  const tempChange = useSelector((state) => state.tempStateChange);
  console.log(tempChange);
  useEffect(() => {
    tempQnaInfoThunk(0);
    tempQnaPagingThunk();
  }, []);
  const qnaInfo = useSelector((state) => state.qnaInfo);
  const qnaPaging = useSelector((state) => state.qnaPaging);

  return (
    <QnaComponent
      title={"문의 사항 확인"}
      qnaInfo={qnaInfo}
      qnaPaging={qnaPaging}
      tempQnaInfoThunk={tempQnaInfoThunk}
    />
  );
};

export default QnaContainer;
