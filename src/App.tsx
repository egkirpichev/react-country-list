import { getTranformedCountries } from "./mappers";
import countries from "./data/country-data.json";
import { CountryList } from "./components/CountryList";
import { ICountry } from "./types";

const App = () => {
  const transformedCountries: ICountry[] = getTranformedCountries(countries);

  return (
    <div className="app container">
      <h1 className="p-3">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

export { App };
