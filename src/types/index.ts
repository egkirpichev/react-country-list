interface ICountry {
	flag: string,
	name: string,
	capital: string, 
	region: string, 
	area: number,
	population: number, 
}

interface ICountryApi {
		flags: {
				png: string,
				svg: string
		},
		name: {
				common: string,
				official: string,
				nativeName: any
		},
		capital: string[],
		region: string,
		area: number,
		population: number,
}


type BadgeLabel = "population" | "area"

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

export { Color }
export type { ICountry, ICountryApi, BadgeLabel }
