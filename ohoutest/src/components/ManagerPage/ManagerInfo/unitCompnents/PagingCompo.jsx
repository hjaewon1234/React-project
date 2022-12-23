import styled from "styled-components";

const PagingCompo = ({ item, tempQnaInfoThunk, index, setColor, color }) => {
  return (
    <PagingDiv>
      <NumberBox
        key={index}
        onClick={() => {
          tempQnaInfoThunk(index);
          setColor(index);
        }}
        style={{
          backgroundColor: color == index ? "#f0a500" : "#f4f4f4",
        }}
      >
        {item + 1}
      </NumberBox>
    </PagingDiv>
  );
};

export default PagingCompo;
