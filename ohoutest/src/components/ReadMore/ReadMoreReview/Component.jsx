import { useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const ReadMoreReviewComponent = ({ reviewData = [], getReviews }) => {
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <ReviewBox>
      <div>
        <div className="countBox">
          <span>리뷰 </span>
          <span>{reviewData.length}</span>
        </div>

        <div className={"reviewBox"}>
          {reviewData?.map((item, index) => {
            return (
              <div key={`reviewData-${index}`} className={"reviewBoxItem"}>
                <span>작성자 : {item.userName}</span>{" "}
                <span>{item.data.text}</span>
                <span>
                  {dayjs(new Date(item.data.createdAt).toString()).format(
                    "YYYY-MM-DD"
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </ReviewBox>
  );
};

export default ReadMoreReviewComponent;

const ReviewBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 100px;
  .reviewBox {
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
    margin-top: 20px;
  }
  .reviewBoxItem {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f0a500;
    padding: 20px 10%;
    span:last-child {
      text-align: left;
      width: 20%;
    }
    @media (max-width: 768px) {
      span:last-child {
        display: none;
      }
    }
  }
  .countBox {
    padding-left: 10%;
  }
  @media (max-width: 600px) {
    span:first-child {
      display: none;
    }
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 200px;
  }
`;
