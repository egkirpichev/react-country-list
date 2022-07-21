interface ICountry {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

interface ICoyntryNativeName {
  [key: string]: { official: string; common: string } | undefined;
}

interface ICoyntryName {
  common: string;
  official: string;
  nativeName: ICoyntryNativeName;
}

interface ICountryApi {
  flags: {
    png: string;
    svg: string;
  };
  name: ICoyntryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

type BadgeLabel = "population" | "area";

enum Color {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
}

export { Color };
export type { ICountry, ICountryApi, BadgeLabel };
