import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineLogin } from "react-icons/ai";

const data = [
  { year: 2015, scans: 5000 },
  { year: 2016, scans: 5000 },
  { year: 2017, scans: 12000 },
  { year: 2018, scans: 12000 },
  { year: 2019, scans: 50000 },
  { year: 2020, scans: 50000 },
  { year: 2021, scans: 8000 },
  { year: 2022, scans: 8000 },
  { year: 2023, scans: 45000 },
  { year: 2024, scans: 45000 },
  { year: 2025, scans: 90000 },
];

const LatestScansChart = () => {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-darkBg p-4">
      <div className="flex items-center gap-2 mb-4">
        <AiOutlineLogin className="text-gray-600 dark:text-gray-300 text-lg" />
        <h2 className="text-lg  font-roobert text-gray-800 dark:text-gray-200">
          Latest Scans
        </h2>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(74 222 128)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="rgb(74 222 128)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgb(209 213 219)"
            className="dark:stroke-gray-700"
          />
          <XAxis
            dataKey="year"
            tick={{
              fill: "rgb(75 85 99)",
              fontSize: 14,
              fontWeight: 500,
            }}
            className="dark:fill-gray-400"
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "rgb(75 85 99)",
              fontSize: 14,
              fontWeight: 500,
            }}
            className="dark:fill-gray-400"
            tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
            domain={[0, 100000]}
            ticks={[0, 10000, 20000, 50000, 100000]}
            axisLine={false}
            minTickGap={10}
            interval="preserveStartEnd"
          />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()} scans`}
            contentStyle={{
              backgroundColor: "rgb(255 255 255)",
              color: "rgb(0 0 0)",
              borderRadius: "8px",
              border: "1px solid rgb(229 231 235)",
            }}
            className="dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          />
          <Area
            type="monotone"
            dataKey="scans"
            stroke="rgb(74 222 128)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorScans)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatestScansChart;
