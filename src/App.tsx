import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json"
import { ICountry, ICountryApi } from "./types";
import { CountryList } from "./components/CountryList";


function App() {

	const transformedCountries = getTranformedCountries(countries)
	return (
    <div className="App">
			<CountryList/>
    </div>
  );
}

export {App};
