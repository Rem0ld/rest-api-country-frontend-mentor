export function fetchAllCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function fetchOneCountry(countryName) {
  if (countryName.length === 3) {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${countryName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  } else {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
}
