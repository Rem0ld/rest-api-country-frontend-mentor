import React from "react";

import { BsArrowDownShort } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

function Filter(props) {
  const handleClickFilter = () => {
    document.getElementById("dropdown").classList.toggle("disabled");
  };

  return (
    <div className="filter">
      <div className="select elements" onClick={handleClickFilter}>
        {props.filter ? <div>{props.filter}</div> : <div>Filter by region</div>}
        {props.filter ? (
          <div>
            <IoIosClose onClick={props.resetFilter} />
          </div>
        ) : (
          <div>
            <BsArrowDownShort />
          </div>
        )}
      </div>
      <div id="dropdown" className="disabled dropdown elements">
        {props.region.map((el) => {
          return (
            <div
              key={el}
              onClick={(e) => {
                props.handleClickChoice(e);
              }}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
