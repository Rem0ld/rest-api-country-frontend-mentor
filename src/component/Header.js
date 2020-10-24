import React from "react";

import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

function Header(props) {
  return (
    <header className="elements">
      <div>
        <h1 className="main-title">Where in the world?</h1>
        <div className="container-dark-mode" onClick={props.toggle}>
          {props.theme === "light" ? <BiMoon /> : <BsMoon />}
          <span className="dark-mode">Dark Mode</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
