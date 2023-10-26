import ReadMoreImageComponent from "./Component";

const ReadMoreImageContainer = ({ item }) => {
  const imgArr = item.img?.split(",");
  return <ReadMoreImageComponent imgArr={imgArr} />;
};

export default ReadMoreImageContainer;
