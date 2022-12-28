import styled from "styled-components";

const CartComponent = ({ navigate, target }) => {
  return (
    <CartBox>
      <div>
        <img src="/api/downloadcat.png" />
      </div>
      <button
        onClick={() => {
          navigate(`/${target}`);
        }}
      >
        상품 담으러 가기
      </button>
    </CartBox>
  );
};

export default CartComponent;

const CartBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  & button {
    border: none;
    margin-top: 30px;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 800;
    color: #f4f4f4;
    background-color: #f0a500;
  }
  & button:hover {
    background-color: #cf7500;
  }
`;
