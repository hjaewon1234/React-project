import FooterComponent from "./Component";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/userInfo";
import useDidMountEffect from "../util/useDidMountEffect";
const FooterContainer = () => {
  const dispatch = useDispatch();
  const [curUser, setcurUser] = useState("");

  useDidMountEffect(() => {
    console.log(curUser);
    if (document.cookie) dispatch(action.setUser(curUser));
    else dispatch(action.setUser({ userId: "", userName: "" }));
  }, [curUser]);

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:8080/check",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setcurUser(result.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <FooterComponent />;
};

export default FooterContainer;
