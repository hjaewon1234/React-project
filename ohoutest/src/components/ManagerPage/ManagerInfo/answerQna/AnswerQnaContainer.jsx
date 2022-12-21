import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AnswerQnaComponent from "./AnswerQnaComponent";

import { qnaInfoThunk } from "../../../../modules/qnaInfo";
import { action } from "../../../../modules/tempStateChange";

const AnswerQnaContainer = () => {
  const dispatch = useDispatch();
  const qnaInfo = useSelector((state) => state.qnaInfo);
  const tempQnaInfoThunk = (num) => dispatch(qnaInfoThunk(num));

  const axiosFunc = async (id, answerQnaText, index) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/manager/answerQna",
      { id: id, qnaAnswer: answerQnaText }
    );

    parseInt(qnaInfo[index].id / 10) == qnaInfo[index].id / 10
      ? tempQnaInfoThunk(qnaInfo[index].id / 10 - 1)
      : tempQnaInfoThunk(parseInt(qnaInfo[index].id / 10));

    return data;
  };

  return (
    <AnswerQnaComponent
      qnaInfo={qnaInfo}
      axiosFunc={axiosFunc}
      tempQnaInfoThunk={tempQnaInfoThunk}
    />
  );
};

export default AnswerQnaContainer;
