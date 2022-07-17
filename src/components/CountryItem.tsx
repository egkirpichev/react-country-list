import React from 'react'
import { ICountry } from '../types'

interface IProps {
	country: ICountry
}

export const CountryItem = ({country}: IProps) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<img className='col-1' src={country.flag} alt="country_flag" />
			<p className='m-0'>{country.name}</p>
			<p className='m-0'>{country.capital}</p>
			<p className='m-0'>{country.area}</p>
		</li>
	)
}
