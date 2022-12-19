import styled from "styled-components";
import { Link } from "react-router-dom";
const CommunityComp = ({ user }, props) => {
  console.log(user, props);
  return (
    <>
      <div>
        <div>
          {user.userId ? (
            `${user.userId}님 안녕하세요`
          ) : (
            <Link to={"/login"}>로그인 하러가기</Link>
          )}
        </div>
        <div>
          <input type="text" />
        </div>
      </div>

      <div>
        <ul>
          <li>1 : 1 </li>
          <li>2 : 2 </li>
          <li>3 : 3 </li>
          <li>4 : 4 </li>
          <li>5 : 5 </li>
        </ul>
      </div>
    </>
  );
};

export default CommunityComp;
