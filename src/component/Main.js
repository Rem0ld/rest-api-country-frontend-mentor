import React, { useState, useEffect } from "react";

// import {handleScroll} from "../services/handleScroll";

/* COMPONENTS */
import Card from "./Card";

function Main(props) {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(20);

  useEffect(() => {
    setCountries(props.countries);
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
        return el.name.toLowerCase().indexOf(props.input.toLowerCase()) > -1;
      })
    );
  }, [props.input]); // eslint-disable-line

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setLoaded(loaded + 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="container-main">
      {countries.map((country, i) => {
        if (i >= loaded) {
          return "";
        } else {
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
        }
      })}
    </div>
  );
}

export default Main;
