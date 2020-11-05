export function parseBorders(borders, countriesArray) {
  let result = countriesArray.reduce((result, current) => {
    if (borders.indexOf(current.alpha3Code) > -1) {
      result.push(current.name);
    }
    return result;
  }, []);
  return result;
}
