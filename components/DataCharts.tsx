"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import Chart from "./Chart";

export default function DataCharts() {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="frid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data?.days} />
      </div>
    </div>
  );
}
