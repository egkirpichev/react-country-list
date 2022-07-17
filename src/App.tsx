import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json"
import { ICountry, ICountryApi } from "./types";
import { CountryList } from "./components/CountryList";


function App() {

	const transformedCountries = getTranformedCountries(countries)


	return (
    <div className="App container">
			<h1 className="">Country List</h1>

			<CountryList countries={transformedCountries}/>
    </div>
  );
}

export {App};
