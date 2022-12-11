import styled from "styled-components";

import MainSlideContainer from "./mainSlide/Container";
import IconLayerContainer from "./iconLayer/Container";
import TodaysDealContainer from "./todaysDeal/Container";
import CategoriesContainer from "./categories/Container";
import HotListContainer from "./hotList/Container";

const Body = () => {
  return (
    <MainBox>
      <MainSlideContainer />
      <IconLayerContainer />
      <TodaysDealContainer />
      <CategoriesContainer />
      <HotListContainer />
    </MainBox>
  );
};

export default Body;

const MainBox = styled.div``;
