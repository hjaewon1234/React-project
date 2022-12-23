import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AnswerQnaComponent from "./AnswerQnaComponent";

import { qnaInfoThunk } from "../../../../modules/qnaInfo";
import { action } from "../../../../modules/tempStateChange";

const AnswerQnaContainer = () => {
  const dispatch = useDispatch();
  const qnaInfo = useSelector((state) => state.qnaInfo);
  const tempStateChange = () =>
    dispatch(tempStateChange(action.setTempStateChange));

  const axiosFunc = async (id, answerQnaText) => {
    const { data } = await axios.post("/api/manager/answerQna", {
      id: id,
      qnaAnswer: answerQnaText,
    });
    console.log(data);
    return data;
  };

  return (
    <AnswerQnaComponent
      qnaInfo={qnaInfo}
      axiosFunc={axiosFunc}
      tempStateChange={tempStateChange}
    />
  );
};

export default AnswerQnaContainer;
