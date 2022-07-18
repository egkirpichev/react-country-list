import { ICountry, ICountryApi } from "../types";

const getTranformedCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map(({flags, name, capital, region, area, population}) => ({
    flag: flags.svg,
    name: name.common,
    capital: capital[0],
    region: region,
    area: area,
    population: population,
  }));
};

export { getTranformedCountries };
