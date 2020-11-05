import React from "react";

const Card = (props) => {
  return (
    <div
      id={props.id}
      className="card elements"
      onClick={(e) => {
        props.handleClick(e);
      }}
    >
      <div className="flag">
        <img src={props.flag} alt={props.name} />
      </div>
      <div className="content">
        <h2>{props.name}</h2>
        <div className="content-details">
          <span>Population: {props.pop}</span>
          <span>Region: {props.reg} </span>
          <span>Capital: {props.cap}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
