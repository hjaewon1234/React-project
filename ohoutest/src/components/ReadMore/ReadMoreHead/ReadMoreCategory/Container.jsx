import ReadMoreCategoryComponent from "./Component";

const ReadMoreCategoryContainer = ({ item }) => {
  const bigsort = item.Category?.bigsort;
  const middlesort = item.Category?.middlesort;
  const smallsort = item.Category?.smallsort;
  return (
    <ReadMoreCategoryComponent
      bigsort={bigsort}
      middlesort={middlesort}
      smallsort={smallsort}
    />
  );
};

export default ReadMoreCategoryContainer;
