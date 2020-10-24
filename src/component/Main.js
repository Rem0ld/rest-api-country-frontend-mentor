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

  return (
    <div className="container-main">
      {countries.map((country) => {
        return (
          <Card
            key={country.numericCode}
            name={country.name}
            flag={country.flag}
            pop={country.population}
            reg={country.region}
            cap={country.capital}
          />
        );
      })}
    </div>
  );
}

export default Main;
