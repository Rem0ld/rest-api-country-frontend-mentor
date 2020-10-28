import React, { useState, useEffect } from "react";

/* COMPONENTS */
import Card from "./Card";

function Main(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setCountries(props.countries);
    }
    return () => (mounted = false);
  }, [props.countries]);

  useEffect(() => {
    if (!props.filter) {
      setCountries(props.countries);
      return;
    }
    setCountries(
      props.countries.filter((el) => {
        return el.region === props.filter;
      })
    );
  }, [props.filter]); // eslint-disable-line

  useEffect(() => {
    if (!props.input) {
      setCountries(props.countries);
      return;
    }
    setCountries(
      props.countries.filter((el) => {
        return el.name.toLowerCase().startsWith(props.input.toLowerCase());
      })
    );
  }, [props.input]); // eslint-disable-line

  return (
    <div className="container-main">
      {countries.map((country) => {
        return (
          <Card
            handleClick={props.handleClick}
            key={country.numericCode}
            name={country.name}
            flag={country.flag}
            pop={country.population}
            reg={country.region}
            cap={country.capital}
            id={country.alpha3Code}
          />
        );
      })}
    </div>
  );
}

export default Main;
