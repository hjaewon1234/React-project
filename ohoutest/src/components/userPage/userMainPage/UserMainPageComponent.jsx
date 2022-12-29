import styled from "styled-components";

import UserPageUpperHeader from "./userHeaderComp/UserPageUpperHeader";

const UserMainPageComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <UserPageUpperHeader />
    </div>
  );
};

export default UserMainPageComponent;

const UserPageHeader = styled.div`
  width: 100%;
`;

const UserPageUnderHeader = styled.div``;
