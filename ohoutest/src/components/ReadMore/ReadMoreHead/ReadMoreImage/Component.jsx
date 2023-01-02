import styled from "styled-components";
import { useState, useEffect } from "react";

let startingPoint, endingPoint;
const ReadMoreImageComponent = ({ imgArr }) => {
  const [currentItem, setcurrentItem] = useState(0);

  const slideToPrev = () => {
    if (currentItem === 0) {
      return;
    } else {
      setcurrentItem((prev) => prev - 1);
    }
  };
  const slideToNext = () => {
    if (currentItem === imgArr?.length - 1) {
      return;
    } else {
      setcurrentItem((prev) => prev + 1);
    }
  };
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
      <div
        className="img-box-right"
        onTouchStart={(e) => {
          startingPoint = e.touches[0].pageX;
        }}
        onTouchEnd={(e) => {
          endingPoint = e.changedTouches[0].pageX;
          if (
            startingPoint > endingPoint &&
            startingPoint - endingPoint > 150
          ) {
            slideToNext();
          } else if (
            startingPoint < endingPoint &&
            endingPoint - startingPoint > 150
          ) {
            slideToPrev();
          }
        }}
        onMouseDown={(e) => {
          startingPoint = e.pageX;
        }}
        onMouseUp={(e) => {
          endingPoint = e.pageX;
          if (startingPoint > endingPoint) {
            slideToNext();
          } else if (startingPoint < endingPoint) {
            slideToPrev();
          }
        }}
      >
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
    user-select: none;
  }
  .img-box-right img {
    width: 100%;
    border-radius: 10px;
    user-select: none;
    -webkit-user-drag: none;
  }
  .img-arr-container {
    transform: translate(
      ${(props) => {
        if (props.currentItem === 0) return 0;
        else return `-${props.currentItem * 100}%`;
      }}
    );
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    .img-box-right {
      flex-basis: 30%;
    }
    .img-box-left {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-grow: 0;
    }
    .img-box-left img {
      margin: 10px !important;
      width: 70px;
      height: 70px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .img-box-left {
      display: none;
    }
    .img-box-right img {
      border-radius: 0px;
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;
