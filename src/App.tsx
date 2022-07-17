import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json"
import { ICountry, ICountryApi } from "./types";
import { CountryList } from "./components/CountryList";


function App() {

	const transformedCountries = getTranformedCountries(countries)


	return (
    <div className="app container">
			<h1 className="p-3">Country List</h1>

			<CountryList countries={transformedCountries}/>
    </div>
  );
}

export {App};
