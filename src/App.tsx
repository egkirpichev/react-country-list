import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json"
import { CountryList } from "./components/CountryList";


const App = () => {

	const transformedCountries = getTranformedCountries(countries)


	return (
    <div className="app container">
			<h1 className="p-3">Country List</h1>

			<CountryList countries={transformedCountries}/>
    </div>
  );
}

export {App};
