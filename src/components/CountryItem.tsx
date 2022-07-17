import { Color, ICountry } from '../types'
import { Badge } from './Badge'

interface IProps {
	country: ICountry
}

export const CountryItem = ({country}: IProps) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<img className='col-1' src={country.flag} alt="country_flag" />
			<p className='m-0 col-1'>{country.name}</p>
			<p className='m-0 col-1'>{country.capital}</p>
			<p className='m-0 col-1'>{country.region}</p>
			<Badge color={Color.primary} label="area" data={country.area}/>
			<Badge color={Color.secondary} label="population" data={country.population}/>
		</li>
	)
}
