import SearchProductContainer from "./SearchProduct/Container";
import BlankSearchPageContainer from "./BlankSearchPage/Container";
import styled from "styled-components";

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
  padding: 50px 0px;
  margin: 0px 50px;
`;

export default SearchComponent;
