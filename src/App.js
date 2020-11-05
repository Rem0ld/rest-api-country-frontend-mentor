import React, { useState, useEffect } from "react";

/* SERVICES */
import { fetchAllCountries, fetchOneCountry } from "./services/fetchData";
import { parseBorders } from "./services/parseBorder";

/* COMPONENTS */
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import Filter from "./component/Filter";
import Main from "./component/Main";
import Detail from "./component/Detail";

/* THEME */
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (countries.length > 0) {
      return;
    }

    let storedCountries = sessionStorage.getItem("countries");

    if (storedCountries) {
      console.log("Got data from sessionStorage");

      setCountries(JSON.parse(storedCountries));
    } else {
      fetchAllCountries().then((data) => {
        if (mounted) {
          console.log("Got data from fetch API");

          setCountries(data);
          sessionStorage.setItem("countries", JSON.stringify(data));
        }
      });
    }
    return () => (mounted = false);
  }, [countries]);

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const [filter, setFilter] = useState("");

  const resetFilter = () => {
    setFilter("");
  };
  const handleClickChoice = (e) => {
    setFilter(e.target.innerHTML);
    document.getElementById("dropdown").classList.toggle("disabled");
  };

  const [country, setACountry] = useState("");

  const handleClickOnACountry = (e) => {
    let alpha3Code = e.currentTarget.id;

    setToggleDetail(false);

    fetchOneCountry(alpha3Code)
      .then((data) => {
        setACountry(data);
        if (data.length === undefined) {
          setBorders(parseBorders(data.borders, countries));
        } else {
          setBorders(parseBorders(data[0].borders, countries));
        }
      })
      .then(() => {
        if (!toggleDetail) {
          toggleAppElements(true);
        }
      });
  };

  const [borders, setBorders] = useState([]);

  const [toggleDetail, setToggleDetail] = useState(false);

  const toggleAppElements = () => {
    setToggleDetail(() => {
      return !toggleDetail;
    });
  };

  const handleClickBack = () => {
    if (toggleDetail) {
      return setToggleDetail(!toggleDetail);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header theme={theme} toggle={toggleTheme} />
        {toggleDetail ? (
          ""
        ) : (
          <div className="container-filters">
            <SearchBar value={input} handleInput={handleInput} />
            <Filter
              filter={filter}
              handleClickChoice={handleClickChoice}
              resetFilter={resetFilter}
              region={countries
                .reduce((region, country) => {
                  if (region.indexOf(country.region) === -1) {
                    region.push(country.region);
                  }
                  return region;
                }, [])
                .filter((item) => item)}
            />
          </div>
        )}
        {toggleDetail ? (
          ""
        ) : (
          <Main
            countries={countries}
            filter={filter}
            input={input}
            handleClick={handleClickOnACountry}
          />
        )}
        {toggleDetail ? (
          <Detail
            handleClickBack={handleClickBack}
            handleClickACountry={handleClickOnACountry}
            countries={countries}
            country={country}
            borders={borders}
          />
        ) : (
          ""
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
