import React, { useEffect, useState } from "react";

/* ICONS */
import { BsArrowLeft } from "react-icons/bs";

const Detail = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  console.log(props.countries);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  useEffect(() => {
    setCountry(props.country);
  }, [props.country]);

  const cur = props.country.currencies.map((el, i, arr) => {
    if (i === arr.length - 1) {
      return <span key={el.name}>{el.name}</span>;
    } else {
      return <span key={el.name}>{el.name}, </span>;
    }
  });

  const lang = props.country.languages.map((el, i, arr) => {
    if (i === arr.length - 1) {
      return <span key={el.name}>{el.name}</span>;
    } else {
      return <span key={el.name}>{el.name}, </span>;
    }
  });

  const borders = props.borders.map((el) => {
    return (
      <div
        id={el}
        key={el}
        className="btn btn-borders elements"
        onClick={(e) => {
          props.handleClickACountry(e);
        }}
      >
        {el}
      </div>
    );
  });

  return (
    <div className="container-detail">
      {country ? (
        <div>
          <div>
            <div
              className="btn btn-back elements"
              onClick={props.handleClickBack}
            >
              <BsArrowLeft />
              Back
            </div>
          </div>
          <div className="detail-main">
            <div className="flag flag-detail">
              <img src={country.flag} alt={country.name} />
            </div>
            <div className="detail-content">
              <h2>{country.name}</h2>
              <div className="detail-lists">
                <ul>
                  <li>
                    Native Name: <span>{country.nativeName}</span>
                  </li>
                  <li>
                    Population: <span>{country.population}</span>
                  </li>
                  <li>
                    Region: <span>{country.region}</span>
                  </li>
                  <li>
                    Sub Region: <span>{country.subregion}</span>
                  </li>
                  <li>
                    Capital: <span>{country.capital}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Top Level Domain: <span>{country.topLevelDomain}</span>
                  </li>
                  <li>Currencies: {cur}</li>
                  <li>Languages: {lang}</li>
                </ul>
              </div>
              <div className="detail-borders">
                <span>Border countries: </span>
                <div>{borders}</div>
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
