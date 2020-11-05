import React, { useEffect, useState } from "react";

import { parseBorders } from "../services/parseBorder";

/* ICONS */
import { BsArrowLeft } from "react-icons/bs";

const Detail = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  useEffect(() => {
    setCountry(props.country);
  }, [props.country]);

  useEffect(() => {
    setBorders(parseBorders(country.borders, countries));
    if (country.currencies) {
      setCurrencies(country.currencies);
    }
  }, [country]);

  useEffect(() => {}, [country]);

  const handleClickBorderCountry = (e) => {
    let nameCountry = e.currentTarget.id;

    let newCountry = countries.reduce((acc, current) => {
      if (nameCountry === current.name) {
        acc = current;
      }
      return acc;
    }, {});
    setCountry(newCountry);
  };

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
              <div>
                <img src={country.flag} alt={country.name} />
              </div>
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
                  <li>
                    Currencies:{" "}
                    {currencies.map((el, i, arr) => {
                      if (i === arr.length - 1) {
                        return <span key={el.name}>{el.name}</span>;
                      } else {
                        return <span key={el.name}>{el.name}, </span>;
                      }
                    })}
                  </li>
                  <li>
                    Languages:{" "}
                    {country.languages
                      ? country.languages.map((el, i, arr) => {
                          if (i === arr.length - 1) {
                            return <span key={el.name}>{el.name}</span>;
                          } else {
                            return <span key={el.name}>{el.name}, </span>;
                          }
                        })
                      : ""}
                  </li>
                </ul>
              </div>
              <div className="detail-borders">
                <div>Border countries: </div>
                <div>
                  {borders.map((el) => {
                    return (
                      <div
                        id={el}
                        key={el}
                        className="btn btn-borders elements"
                        onClick={(e) => {
                          handleClickBorderCountry(e);
                        }}
                      >
                        {el}
                      </div>
                    );
                  })}
                </div>
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
