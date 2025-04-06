import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 40, pv: 60, amt: 100 },
  { name: "Page B", uv: 60, pv: 100, amt: 160 },
  { name: "Page C", uv: 20, pv: 60, amt: 80 },
  { name: "Page D", uv: 45, pv: 65, amt: 110 },
  { name: "Page E", uv: 65, pv: 100, amt: 2181 },
];

const Chart = () => {
  return (
    <div style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", overflow: "hidden", height: "531px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
        <h3 style={{ margin: 0 }}>Kế hoạch thực hiện</h3>
        <input
          type="date"
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
          placeholder="Quý này"
        />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          isAnimationActive={false}
          width={600}
          height={600}
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="30%"
        >
          <XAxis
            dataKey="name"
            label={{ value: "Mặt Hàng", position: "insideLeft", offset: -80 }}
            tickMargin={5}
          />
          <YAxis
            label={{
              value: "Cái",
              position: "insideTop",
              offset: -30,
            }}
          />
          <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ top: 30 }} />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            name="Kế hoạch"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            name="Thực hiện"
            isAnimationActive={false}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;