import { BadgeLabel, Color } from "../types";

interface IProps {
  color: Color;
  label: BadgeLabel;
  data: number;
}

const Badge = ({ color, label, data }: IProps) => {

  return (
    <p className={`badge bg-${color} m-0 p-2 col-2`}>
      {label}: {data}
    </p>
  );
};

export { Badge };
