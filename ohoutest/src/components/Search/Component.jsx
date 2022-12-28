import SearchProductContainer from "./SearchProduct/Container";
import BlankSearchPageContainer from "./BlankSearchPage/Container";
import styled from "styled-components";
import ResponsiveComp from "../util/ResponsiveComp";

const SearchComponent = ({ itemArr }) => {
  return (
    <SearchComponentBox>
      {itemArr.length == 0 ? (
        <BlankSearchPageContainer></BlankSearchPageContainer>
      ) : (
        <SearchProductContainer itemArr={itemArr}></SearchProductContainer>
      )}
    </SearchComponentBox>
  );
};

const SearchComponentBox = styled.div`
  width: 100%;
`;

export default SearchComponent;
