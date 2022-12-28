import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyReviewComp = () => {
  const [myReviews, setMyReviews] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const getMyReviewAxios = () => {
    if (!userInfo.userId) return;
    axios
      .post("/api/product/getReviews", { userId: userInfo.userId })
      .then(({ data }) => {
        console.log(data);
        if (myReviews != data) setMyReviews(data);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    getMyReviewAxios();
  }, []);

  return (
    <>
      <MyReviewBox>
        {myReviews?.map((item, index) => {
          return (
            <ReviewBox
              key={`reviewBox-${index}`}
              onClick={() => {
                navigate(`/readmore/${item.product.id}`);
              }}
            >
              <img
                src={`/api/download${
                  item.product.img.toString().split(",")[0]
                }`}
              />
              <div key={`reviewProduct-${index}`}>{item.product.name}</div>
              <div key={`review-${index}`}>리뷰내용 : {item.review.text}</div>
            </ReviewBox>
          );
        })}
      </MyReviewBox>
    </>
  );
};

export default MyReviewComp;

const MyReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  img {
    width: 100px;
  }
  cursor: pointer;
`;
const ReviewBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    width: 30%;
  }
`;
