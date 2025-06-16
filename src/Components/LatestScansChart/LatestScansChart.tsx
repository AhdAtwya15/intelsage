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

interface LatestScansChartProps {
  data: { year: number; scans: number }[];
}

const LatestScansChart = ({ data }: LatestScansChartProps) => {
  return (
    <div className="rounded-lg border-[1px] border-[#ececece1] dark:border-none  bg-primary-400 p-4">
      <div className="flex items-center gap-2 mb-4">
        <AiOutlineLogin className=" text-grey-100 text-lg" />
        <h2 className="text-lg  font-roobert  text-grey-100">
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
            tick={{ fill: "var(--color-grey-100)", fontSize: 14, fontWeight: 500 }}
            tickLine={false}
          />

          <YAxis
          tick={{ fill: "var(--color-grey-100)", fontSize: 14, fontWeight: 500 }}
          className="dark:fill-gray-400"
          tickFormatter={(value) => `${value}`}
          domain={[0, 'dataMax + 14']}
          />


          <Tooltip
            formatter={(value) => `${(value as number).toLocaleString()} scans`}
            contentStyle={{ backgroundColor: "rgb(255 255 255)", color: "rgb(0 0 0)", borderRadius: "8px", border: "1px solid rgb(229 231 235)" }}
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
