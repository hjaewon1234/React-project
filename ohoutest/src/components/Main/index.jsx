import styled from "styled-components";

import MainSlideContainer from "./mainSlide/Container";
import IconLayerContainer from "./iconLayer/Container";
import TodaysDealContainer from "./todaysDeal/Container";
import CategoriesContainer from "./categories/Container";
import HotListContainer from "./hotList/Container";

const Main = () => {
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

export default Main;

const MainBox = styled.div``;
