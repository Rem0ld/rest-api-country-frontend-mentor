import React from "react";

import { BsArrowDownShort } from "react-icons/bs";

function Filter(props) {
  const handleClickFilter = () => {
    document.getElementById("dropdown").classList.toggle("disabled");
  };
  return (
    <div>
      <div className="select elements" onClick={handleClickFilter}>
        {props.filter ? (
          <span>{props.filter}</span>
        ) : (
          <span>Filter by region</span>
        )}
        <BsArrowDownShort />
      </div>
      <div id="dropdown" className="disabled dropdown elements">
        <span
          onClick={(e) => {
            props.handleClickChoice(e);
          }}
        >
          Africa
        </span>
        <span
          onClick={(e) => {
            props.handleClickChoice(e);
          }}
        >
          Americas
        </span>
        <span
          onClick={(e) => {
            props.handleClickChoice(e);
          }}
        >
          Asia
        </span>
        <span
          onClick={(e) => {
            props.handleClickChoice(e);
          }}
        >
          Europe
        </span>
        <span
          onClick={(e) => {
            props.handleClickChoice(e);
          }}
        >
          Oceania
        </span>
      </div>
    </div>
  );
}

export default Filter;
