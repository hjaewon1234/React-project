import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AnswerQnaComponent from "./AnswerQnaComponent";

import { qnaInfoThunk } from "../../../../modules/qnaInfo";
import { action } from "../../../../modules/tempStateChange";

const AnswerQnaContainer = () => {
  const dispatch = useDispatch();
  const qnaInfo = useSelector((state) => state.qnaInfo);
  const tempState = useSelector((state) => state.tempStateChange);
  const tempStateChange = () =>
    dispatch(tempStateChange(action.setTempStateChange));

  const axiosFunc = async (id, answerQnaText) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/manager/answerQna",
      { id: id, qnaAnswer: answerQnaText }
    );

    return data;
  };

  return <AnswerQnaComponent qnaInfo={qnaInfo} axiosFunc={axiosFunc} />;
};

export default AnswerQnaContainer;
