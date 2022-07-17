import { BadgeLabel } from "../types"

interface IProps {
	color: string,
	label: BadgeLabel,
	data: number
}

export const Badge = ({color, label, data}: IProps) => {

	let classname: string = ""
	if (color === "primary") {
		classname = "badge bg-primary m-0 p-2 col-2" 
	}	else classname = "badge bg-secondary m-0 p-2 col-2"

	return (
		<p className={classname}>{label}: {data}</p>
	)
}
