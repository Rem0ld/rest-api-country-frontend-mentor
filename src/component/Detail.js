import React from "react";

// eslint-disable-next-line
import { BsArrowLeft } from "react-icons/bs";

const Detail = (props) => {
  // const cur = Object.entries(props.country.currencies).map((el) => {
  //   console.log(props.country.currencies[el]);
  //   return props.country.currencies[el];
  // });
  // const lang = props.country.languages.join(", ");
  console.log(props.cur);
  return (
    <div className="container-detail">
      {props.country ? (
        <div>
          <div>
            <div className="btn-back elements" onClick={props.handleClickBack}>
              <BsArrowLeft />
              Back
            </div>
          </div>
          <div className="detail-main">
            <div className="flag flag-detail">
              <img src={props.country.flag} alt={props.country.name} />
            </div>
            <div className="detail-content">
              <h2>{props.country.name}</h2>
              <div className="detail-lists">
                <ul>
                  <li>
                    Native Name: <span>{props.country.nativeName}</span>
                  </li>
                  <li>
                    Population: <span>{props.country.population}</span>
                  </li>
                  <li>
                    Region: <span>{props.country.region}</span>
                  </li>
                  <li>
                    Sub Region <span>{props.country.subregion}</span>
                  </li>
                  <li>
                    Capital: <span>{props.country.capital}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Top Level Domain:{" "}
                    <span>{props.country.topLevelDomain}</span>
                  </li>
                  <li>
                    Currencies: <span>{}</span>
                  </li>
                  <li>
                    Languages: <span>{}</span>
                  </li>
                </ul>
              </div>
              <div className="detail-borders">
                <span>Border countries:</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
