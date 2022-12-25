import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadMoreCategoryComponent = ({ bigsort, middlesort, smallsort }) => {
  return (
    <ReadMoreCategoryBox>
      <div>
        <span className="categorie-span">
          <Link to={"/"}>{bigsort}</Link>
          <img className="chevron-right" src="/img/chevron-right-solid.svg" />
        </span>
        <span className="categorie-span">
          <Link>{middlesort}</Link>
          <img className="chevron-right" src="/img/chevron-right-solid.svg" />
        </span>
        <span className="categorie-span">
          <Link>{smallsort}</Link>
        </span>
      </div>
    </ReadMoreCategoryBox>
  );
};

export default ReadMoreCategoryComponent;

const ReadMoreCategoryBox = styled.div`
  text-align: initial;
  padding: 3px 10px;
  font-size: 15px;

  .categorie-span {
    display: inline-flex;
    aline-items: center;
    color: #828c94;
  }
  .categorie-span a {
    text-decoration: none;
    color: inherit;
    margin: 0 5px;
  }
  .chevron-right {
    width: 7px;
    margin: 0 5px;
    filter: invert(55%) sepia(17%) saturate(194%) hue-rotate(164deg)
      brightness(96%) contrast(94%);
  }
`;
