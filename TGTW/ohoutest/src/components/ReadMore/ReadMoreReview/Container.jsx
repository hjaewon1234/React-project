import axios from "axios";
import { useState } from "react";
import ReadMoreReviewComponent from "./Component";

const ReadMoreReviewContainer = ({ productId }) => {
  const [reviewData, setReviewData] = useState([]);
  const getReviews = () => {
    axios
      .post("/api/product/getReviewsFromProductId", { productId: productId })
      .then((reviews) => {
        setReviewData(reviews.data);
      })
      .catch((err) => {});
  };

  return (
    <ReadMoreReviewComponent reviewData={reviewData} getReviews={getReviews} />
  );
};

export default ReadMoreReviewContainer;
