import styled from "styled-components";
import { useState } from "react";

const ReadMoreImageComponent = ({ imgArr }) => {
  const [currentItem, setcurrentItem] = useState(0);

  return (
    <ReadMoreImageBox currentItem={currentItem}>
      <div className="img-box-left">
        {imgArr?.map((elem, idx) => {
          return (
            <img
              key={`imgArr - ${idx}`}
              src={`/api/download${elem}`}
              onMouseEnter={() => {
                setcurrentItem(idx);
              }}
            />
          );
        })}
      </div>
      <div className="img-box-right">
        {imgArr?.map((elem, idx) => {
          return (
            <img
              className="img-arr-container"
              key={`imgArr - ${idx}`}
              src={`/api/download${elem}`}
            />
          );
        })}
      </div>
    </ReadMoreImageBox>
  );
};

export default ReadMoreImageComponent;

const ReadMoreImageBox = styled.div`
  display: flex;
  flex-basis: 20% !important;
  padding: 10px;

  .img-box-left,
  .img-box-right {
    flex: 1;
  }
  .img-box-left {
  }
  .img-box-left img {
    border-radius: 10px;
    cursor: pointer;
    width: 75px;
    margin-right: 10px;
  }
  .img-box-left img + img {
    margin-top: 10px;
  }
  .img-box-right {
    flex-basis: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .img-box-right img {
    width: 100%;
    border-radius: 10px;
  }
  .img-arr-container {
    transform: translate(
      ${(props) => {
        if (props.currentItem === 0) return 0;
        else return `-${props.currentItem * 100}%`;
      }}
    );
  }
`;
