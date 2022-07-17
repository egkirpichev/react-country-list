import { ICountry, ICountryApi } from "../types";

const getTranformedCountries = (countries: ICountryApi[]): ICountry[] => {
	return countries.map((country) => ({

	flag: country.flags.svg,
	name: country.name.common,
	capital: country.capital[0], 
	region: country.region, 
	area: country.area,
	population: country.population,
	 
}))}

export { getTranformedCountries }