import styled from "styled-components";

const MyList = ({ myarr, myList, setMyList }) => {
  return (
    <div>
      <UserPageUnderHeaderDiv>
        {myarr.map((item, index) => {
          return (
            <UserPageUnderItem
              onClick={() => {
                setMyList((state) => (state = index));
              }}
              style={{ color: myList == index ? "#f0a500" : "black" }}
              key={index}
            >
              {item}
            </UserPageUnderItem>
          );
        })}
      </UserPageUnderHeaderDiv>
    </div>
  );
};

export default MyList;

const UserPageUnderItem = styled.div`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #f0a500;
  }
`;
const UserPageUnderHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 10px;
  justify-content: center;
`;
