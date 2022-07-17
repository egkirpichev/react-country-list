import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json"
import { ICountry, ICountryApi } from "./types";


function App() {

	const transformedCountries = getTranformedCountries(countries)
	return (
    <div className="App">
    </div>
  );
}

export {App};
