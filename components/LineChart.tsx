import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

type Props = {
  data?: {
    data: string;
    income: number;
    expenses: number;
  }[];
};

export default function LineVariant({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dot={false}
          strokeWidth={2}
          dataKey="income"
          stroke="#3b82f6"
          className="drop-shadow-sm"
        />
        <Line
          dot={false}
          strokeWidth={2}
          dataKey="expenses"
          stroke="#f43f5e"
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
