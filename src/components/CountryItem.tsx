import React from 'react'
import { ICountry } from '../types'

interface IProps {
	country: ICountry
}

export const CountryItem = ({country}: IProps) => {
	return (
		<li className='list-group-item d-flex'>
			<img className='' src={country.flag} alt="country_flag" />
			<p>{country.name}</p>
			<p>{country.capital}</p>
			<p>{country.area}</p>
		</li>
	)
}
