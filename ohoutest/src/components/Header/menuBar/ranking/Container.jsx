import RankingComponent from "./Component";

const RankingContainer = () => {
  return (
    <>
      <RankingComponent />
    </>
  );
};

// 랭킹 db를 만들어야됨 과거의 top 10이 됨
// product랑 관계를 맺어서 검색 db도 만들 생각
// 해당 product의 검색 횟수를 검색 db에 저장
// 검색 db top 10을 랭킹 db랑 비교해서 up down을 해주고 top db를 갱신해줌
export default RankingContainer;
