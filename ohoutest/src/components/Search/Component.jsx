import SearchProductContainer from "./SearchProduct/Container";
import BlankSearchPageContainer from "./BlankSearchPage/Container";

const SearchComponent = ({ sword, itemArr }) => {
  console.log(sword);
  return (
    <>
      <div>{sword}</div>
      {sword ? <></> : <BlankSearchPageContainer />}
      <SearchProductContainer itemArr={itemArr}></SearchProductContainer>
    </>
  );
};

export default SearchComponent;
