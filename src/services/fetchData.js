export function fetchAllCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function fetchOneCountry(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryName}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}
