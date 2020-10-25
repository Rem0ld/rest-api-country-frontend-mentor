import React, { useState, useEffect } from "react";

/* SERVICES */
import { fetchAllCountries } from "./services/fetchData";

/* COMPONENTS */
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import Filter from "./component/Filter";
import Main from "./component/Main";

/* THEME */
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

/* ICONS */
import { BsArrowLeft } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let mounted = true;
    let storedCountries = sessionStorage.getItem("countries");

    if (countries.length > 0) {
      return;
    }
    if (storedCountries) {
      setCountries(JSON.parse(storedCountries));
    } else {
      fetchAllCountries().then((data) => {
        if (mounted) {
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

  // useEffect(() => {
  //   setCountries(
  //     countries.filter((el) => {
  //       return el.name.toLowerCase().startsWith(input);
  //     })
  //   );
  //   console.log(countries);
  // }, [countries, input]);

  const [filter, setFilter] = useState("");

  const handleClickChoice = (e) => {
    setFilter(e.target.innerHTML);
    document.getElementById("dropdown").classList.toggle("disabled");
  };

  useEffect(() => {
    console.log(filter);
    setCountries(
      [...countries].filter((el) => {
        return el.region === filter;
      })
    );
  }, [filter]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header theme={theme} toggle={toggleTheme} />
        <div className="container-filters">
          <SearchBar value={input} handleInput={handleInput} />
          <Filter filter={filter} handleClickChoice={handleClickChoice} />
        </div>
        <Main countries={countries} />
      </div>
    </ThemeProvider>
  );
}

export default App;
