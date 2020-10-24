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
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let mounted = true;
    fetchAllCountries().then((data) => {
      if (mounted) {
        setCountries(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setCountries(
      countries.filter((el) => {
        return el.name.toLowerCase().startsWith(input);
      })
    );
  };
  // useEffect(() => {

  // }, [input]);

  const handleClickChoice = (e) => {
    setFilter(e.target.innerHTML);
    document.getElementById("dropdown").classList.toggle("disabled");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header theme={theme} toggle={toggleTheme} />
        <div className="container-filters">
          <SearchBar value={input} handleInput={handleInput} />
          <Filter handleClickChoice={handleClickChoice} />
        </div>
        <Main countries={countries} />
      </div>
    </ThemeProvider>
  );
}

export default App;
