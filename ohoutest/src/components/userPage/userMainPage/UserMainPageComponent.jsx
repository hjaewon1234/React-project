import styled from "styled-components";

import UserPageUpperHeader from "./userHeaderComp/UserPageUpperHeader";

const UserMainPageComponent = ({ colorNum }) => {
  return (
    <div style={{ width: "100%" }}>
      <UserPageUpperHeader colorNum={colorNum} />
    </div>
  );
};

export default UserMainPageComponent;

const UserPageHeader = styled.div`
  width: 100%;
`;

const UserPageUnderHeader = styled.div``;
