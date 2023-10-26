import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const ShippingStatus = ({ listClick }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [productState, setProductState] = useState([]);
  const navigate = useNavigate();
  const userShipping = async () => {
    const { data } = await axios.post("/api/order/getUserShipping", {
      userId: userInfo.userId,
    });

    setProductState(data);
  };
  useEffect(() => {
    if (userInfo.userId) {
      userShipping();
    }
  }, []);
  return (
    <UserPageInfo>
      {listClick == 0 ? (
        <div>
          {productState.map((item, index) => {
            const itemTime = dayjs(new Date(item.createdAt).toString()).format(
              "YYYY-MM-DD"
            );
            const nowTime = dayjs(new Date(Date.now()).toString()).format(
              "YYYY-MM-DD"
            );
            const shippingStatus =
              nowTime.split("-")[2] - itemTime.split("-")[2];
            if (shippingStatus == 0) {
              return (
                <ShippingUnderDiv>
                  <ShippingUnderItem
                    onClick={() => {
                      navigate(`/readmore/${item.Product.id}`);
                    }}
                    key={`shipping-${index}`}
                  >
                    <div className="imgDiv">
                      <img
                        src={`/api/download${
                          item.Product.img.toString().split(",")[0]
                        }`}
                      />
                    </div>
                    <div className="nameDiv">
                      [{item.Product.brand}] [
                      {item.Product.name.toString().split("(")[0]}]
                    </div>
                    <div className="orderCountDiv">주문 : {item.count} </div>
                    <div className="orderDiv">
                      주문 일시 :{" "}
                      {dayjs(new Date(item.createdAt).toString()).format(
                        "YYYY-MM-DD"
                      )}
                    </div>
                  </ShippingUnderItem>{" "}
                </ShippingUnderDiv>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      ) : (
        <></>
      )}
      {listClick == 1 ? (
        <div>
          {productState.map((item, index) => {
            const itemTime = dayjs(new Date(item.createdAt).toString()).format(
              "YYYY-MM-DD"
            );
            const nowTime = dayjs(new Date(Date.now()).toString()).format(
              "YYYY-MM-DD"
            );
            const shippingStatus =
              nowTime.split("-")[2] - itemTime.split("-")[2];
            if (shippingStatus == 1) {
              return (
                <ShippingUnderDiv>
                  <ShippingUnderItem
                    onClick={() => {
                      navigate(`/readmore/${item.Product.id}`);
                    }}
                    key={`shipping-${index}`}
                  >
                    <div className="imgDiv">
                      <img
                        src={`/api/download${
                          item.Product.img.toString().split(",")[0]
                        }`}
                      />
                    </div>
                    <div className="nameDiv">
                      [{item.Product.brand}] [
                      {item.Product.name.toString().split("(")[0]}]
                    </div>
                    <div className="orderCountDiv">주문 : {item.count} </div>
                    <div className="orderDiv">
                      주문 일시 :{" "}
                      {dayjs(new Date(item.createdAt).toString()).format(
                        "YYYY-MM-DD"
                      )}
                    </div>
                  </ShippingUnderItem>{" "}
                </ShippingUnderDiv>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      ) : (
        <></>
      )}
      {listClick == 2 ? (
        <div>
          {productState.map((item, index) => {
            const itemTime = dayjs(new Date(item.createdAt).toString()).format(
              "YYYY-MM-DD"
            );
            const nowTime = dayjs(new Date(Date.now()).toString()).format(
              "YYYY-MM-DD"
            );
            const shippingStatus =
              nowTime.split("-")[2] - itemTime.split("-")[2];
            if (shippingStatus > 1) {
              return (
                <ShippingUnderDiv>
                  <ShippingUnderItem
                    onClick={() => {
                      navigate(`/readmore/${item.Product.id}`);
                    }}
                    key={`shipping-${index}`}
                  >
                    <div className="imgDiv">
                      <img
                        src={`/api/download${
                          item.Product.img.toString().split(",")[0]
                        }`}
                      />
                    </div>
                    <div className="nameDiv">
                      [{item.Product.brand}] [
                      {item.Product.name.toString().split("(")[0]}]
                    </div>
                    <div className="orderCountDiv">주문 : {item.count} </div>
                    <div className="orderDiv">
                      주문 일시 :{" "}
                      {dayjs(new Date(item.createdAt).toString()).format(
                        "YYYY-MM-DD"
                      )}
                    </div>
                  </ShippingUnderItem>
                </ShippingUnderDiv>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      ) : (
        <></>
      )}
    </UserPageInfo>
  );
};

export default ShippingStatus;

const ShippingUnderDiv = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid #f0a500;
  border-radius: 10px;
  min-width: 300px;
  @media only screen and (max-width: 1240px) {
    font-size: 0.95rem;
    .orderCountDiv {
      display: none;
    }
  }
  @media only screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 0.9rem;
    .orderDiv {
      display: none;
    }
  }
`;
const ShippingUnderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  column-gap: 10px;
  margin: 15px;
  cursor: pointer;
  padding: 10px;
  border: 3px solid black;
  border-radius: 10px;
`;
const UserPageInfo = styled.div`
  width: 100%;
  padding-top: 20px;
`;
