import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ManagerInfoComponent from "./ManagerInfoComponent";
import { productManageThunk } from "../../../../modules/productManage";
import { productPagingThunk } from "../../../../modules/productPaging";
const ManagerInfoContainer = () => {
  const dispatch = useDispatch();
  const tempThunk = (num) => dispatch(productManageThunk(num));
  const tempPagingThunk = () => dispatch(productPagingThunk());
  const productInfo = useSelector((state) => state.productManageInfo);
  useEffect(() => {
    tempThunk(0);
    tempPagingThunk();
  }, []);

  const productPaging = useSelector((state) => state.productPaging);

  return (
    <ManagerInfoComponent
      title={"상품 배송 정보"}
      tempThunk={tempThunk}
      productInfo={productInfo}
      productPaging={productPaging}
    />
  );
};

export default ManagerInfoContainer;
