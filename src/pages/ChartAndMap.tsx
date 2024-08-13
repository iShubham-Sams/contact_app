import { useQuery } from "react-query";
import Chart from "../components/chartAndMap/Chart";
import Map from "../components/chartAndMap/Map";
import { getWorldWidData } from "../utils/api/chartAndMap";
import { Suspense } from "react";
import { Hourglass } from "react-loader-spinner";

const ChartAndMap = () => {
  const { data: worldData, isLoading } = useQuery({
    queryKey: ["worldData"],
    queryFn: getWorldWidData,
  });

  return (
    <div className=" p-4 space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="font-bold">Covid 19 Case</div>
        <div className="drop-shadow-sm border p-2 rounded-md">
          <span className="font-semibold">Total </span>
          {worldData?.cases}
        </div>
        <div className="drop-shadow-sm border p-2 rounded-md">
          <span className="font-semibold">Active</span>
          {worldData?.active}
        </div>
        <div className="drop-shadow-sm border p-2 rounded-md">
          <span className="font-semibold">Critical</span>
          {worldData?.critical}
        </div>
        <div className="drop-shadow-sm border p-2 rounded-md">
          <span className="font-semibold">Deaths</span>
          {worldData?.deaths}
        </div>
      </div>
      <Chart />
      <Map />
    </div>
  );
};

export default ChartAndMap;
