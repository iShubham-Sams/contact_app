import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useQuery } from "react-query";
import { getChartData } from "../utils/api/chartAndMap";

const ChartAndMap = () => {
  const [caseChartData, setCaseChartData] = useState<{ name: string; case: number }[] | null>(null);
  const { data: graphData } = useQuery({
    queryKey: ["graphData"],
    queryFn: getChartData,
  });
  useEffect(() => {
    if (graphData) {
      const caseValue = Object.entries(graphData.cases).map(([key, val]) => {
        return {
          name: key,
          case: val,
          deaths: graphData.deaths[key] ?? 0,
          recovered: graphData.recovered[key] ?? 0,
        };
      });
      setCaseChartData(caseValue);
    }
  }, [graphData]);
  console.log(caseChartData, "caseChartData");
  const formatYAxis = (tick: number) => {
    if (tick >= 1000000) {
      return `${(tick / 1000000).toFixed(1)}M`;
    } else if (tick >= 1000) {
      return `${(tick / 1000).toFixed(1)}K`;
    } else {
      return String(tick);
    }
  };
  return (
    <div className="h-[90vh] p-4">
      <ResponsiveContainer width="100%" height="50%">
        <LineChart
          width={500}
          height={300}
          data={caseChartData ?? []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="case" tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend />
          <Line dataKey="case" strokeWidth={1} dot={false} />
          <Line dataKey="deaths" strokeWidth={1} dot={false} stroke="#FF0000" />
          <Line dataKey="recovered" strokeWidth={1} dot={false} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartAndMap;
