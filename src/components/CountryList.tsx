import { ICountry } from "../types";
import { CountryItem } from "./CountryItem";

interface IProps {
  countries: ICountry[];
}

const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
};

export { CountryList };
