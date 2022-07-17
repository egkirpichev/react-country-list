export interface ICountry {
	flag: string,
	name: string,
	capital: string, 
	region: string, 
	area: number,
	population: number, 
}

export interface ICountryApi {
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


export type BadgeLabel = "population" | "area"

export enum Color {
	primary = "primary",
	secondary = "secondary",  
	success = "success",
	danger = "danger",
	warning = "warning",
	info = "info",
	light = "light",
	dark = "dark",
}