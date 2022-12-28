import styled from "styled-components";

const PublicModalBase = ({ children }) => {
  return <PublicModalBaseBox>{children}</PublicModalBaseBox>;
};

export default PublicModalBase;

const PublicModalBaseBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  z-index: 100;
  top: 0;
  left: 0;
`;
