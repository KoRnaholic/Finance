import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, FileSearch, Radar, Target } from "lucide-react";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PieVariant from "./PieVariant";

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export default function SpendingPie({ data = [] }: Props) {
  const [chartType, setChartType] = useState("pie");

  const onTypeChange = (type: string) => {
    setChartType(type);
  };
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader
        className="flex space-y-2 lg:space-y-0 lg:flex-row
    lg:items-center justify-between"
      >
        <CardTitle className="text-xl line-clamp-1">Cateogires</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className="lg:w-atuo h-9 rounded-md px-3">
            <SelectValue placeholder="Chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pie">
              <div className="flex items-center">
                <PieChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Pie Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radar">
              <div className="flex items-center">
                <Radar className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radar Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radial">
              <div className="flex items-center">
                <Target className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radial Chart</p>
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
            {chartType === "pie" && <PieVariant data={data} />}
            {/* {chartType === "radar" && <BarVariant data={data} />}
            {chartType === "radial" && <AreaVariant data={data} />} */}
          </>
          // <AreaVariant data={data} />
          // <BarVariant data={data} />
        )}
      </CardContent>
    </Card>
  );
}
