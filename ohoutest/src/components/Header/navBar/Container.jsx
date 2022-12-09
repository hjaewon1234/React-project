import NavBarComponent from "./Component";
import { useRef, useState } from "react";

const NavBarContainer = () => {
  const searchRef = useRef();
  let isFocus = false;
  const focusHandler = () => {
    isFocus = !isFocus;
    if (isFocus) searchRef.current.style = "border: 2px solid #F0A500";
    else searchRef.current.style = "border: 2px solid grey";
  };
  const [searchInput, setSearchInput] = useState("");

  return (
    <NavBarComponent
      searchRef={searchRef}
      focusHandler={focusHandler}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    />
  );
};

export default NavBarContainer;
