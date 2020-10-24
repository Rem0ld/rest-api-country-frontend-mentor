import React, { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <div className="card elements">
      <div className="flag">
        <img src={props.flag} alt={`flag of ${props.name}`} />
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
