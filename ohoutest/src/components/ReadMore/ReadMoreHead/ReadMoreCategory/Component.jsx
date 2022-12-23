import styled from "styled-components";

const ReadMoreCategoryComponent = ({ bigsort, middlesort, smallsort }) => {
  return (
    <ReadMoreCategoryBox>
      <div>
        <span>
          {bigsort} {"> "}
        </span>
        <span>{middlesort} &#62; </span>
        <span>{smallsort}</span>
      </div>
      {/* <div>{item.categoryData?.bigsort}</div>
      <div>{item.categoryData?.middlesort}</div>
      <div>{item.categoryData?.smallsort}</div> */}
    </ReadMoreCategoryBox>
  );
};

export default ReadMoreCategoryComponent;

const ReadMoreCategoryBox = styled.div``;
