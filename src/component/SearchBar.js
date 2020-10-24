import React from "react";

import { GiWineGlass } from "react-icons/gi";

function SearchBar(props) {
  return (
    <div className="input">
      <div className="elements">
        <GiWineGlass />
      </div>
      <input
        type="text"
        className="elements"
        value={props.value}
        onChange={(e) => {
          props.handleInput(e);
        }}
        placeholder="Search for a country"
      />
    </div>
  );
}

export default SearchBar;
