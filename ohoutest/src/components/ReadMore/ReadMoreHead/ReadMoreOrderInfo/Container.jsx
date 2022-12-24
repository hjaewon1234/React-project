import ReadMoreOrderInfoComponent from "./Component";

const ReadMoreOrderInfoContainer = ({ item }) => {
  const brand = item.brand;
  const name = item.name;
  const price = item.price;
  return <ReadMoreOrderInfoComponent brand={brand} name={name} price={price} />;
};

export default ReadMoreOrderInfoContainer;
