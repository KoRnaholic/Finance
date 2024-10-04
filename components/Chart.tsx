import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart3, FileSearch, LineChart } from "lucide-react";
import AreaVariant from "./AreaVariant";
import BarVariant from "./BarVariant";
import LineVariant from "./LineChart";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  data?: {
    data: string;
    income: number;
    expenses: number;
  }[];
};

export default function Chart({ data = [] }: Props) {
  const [chartType, setChartType] = useState("area");

  const onTypeChange = (type: string) => {
    setChartType(type);
  };
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader
        className="flex space-y-2 lg:space-y-0 lg:flex-row
    lg:items-center justify-between"
      >
        <CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className="lg:w-atuo h-9 rounded-md px-3">
            <SelectValue placeholder="Chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="area">
              <div className="flex items-center">
                <AreaChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Area Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="line">
              <div className="flex items-center">
                <LineChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Line Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="bar">
              <div className="flex items-center">
                <BarChart3 className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Bar Chart</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div
            className="flex flex-col gap-y-4 items-center justify-center
            h-[350px] w-full"
          >
            <FileSearch className="text-muted-foreground text-sm" />
            <p>No data for this period</p>
          </div>
        ) : (
          <>
            {chartType === "line" && <LineVariant data={data} />}
            {chartType === "bar" && <BarVariant data={data} />}
            {chartType === "area" && <AreaVariant data={data} />}
          </>
          // <AreaVariant data={data} />
          // <BarVariant data={data} />
        )}
      </CardContent>
    </Card>
  );
}
