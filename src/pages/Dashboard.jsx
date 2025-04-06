import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
// import { Progress } from "@/components/ui/progress";
import Chart from "../components/BarChart/Chart";

const Dashboard = () => {
  const [data, setData] = useState({
    topProducts: [
      { name: "Áo sơ mi dài tay", value: 52, unit: "chiếc" },
      { name: "Quần tây", value: 22, unit: "chiếc" },
      { name: "Áo hoodie", value: 38, unit: "chiếc" },
      { name: "Đầm maxi", value: 27, unit: "chiếc" },
    ],
    productionPlan: [
      {
        name: "Áo sơ mi",
        planned: 100,
        actual: 70,
        team: "Tổ A",
        deadline: "2025-04-10",
      },
      {
        name: "Áo thun polo",
        planned: 85,
        actual: 65,
        team: "Tổ B",
        deadline: "2025-04-12",
      },
      {
        name: "Quần baggy",
        planned: 90,
        actual: 75,
        team: "Tổ C",
        deadline: "2025-04-15",
      },
      {
        name: "Quần jogger",
        planned: 80,
        actual: 50,
        team: "Tổ A",
        deadline: "2025-04-20",
      },
    ],
    productionStatus: [
      { name: "Chưa hoàn thành", value: 6, color: "#f97316" },
      { name: "Đang sản xuất", value: 7, color: "#10b981" },
      { name: "Hoàn thành", value: 8, color: "#3b82f6" },
    ],
    productionProgress: [
      { name: "Áo sơ mi dài tay", progress: 55, supervisor: "Nguyễn Văn A" },
      { name: "Áo sơ mi cút tay", progress: 80, supervisor: "Trần Thị B" },
      { name: "Quần baggy", progress: 65, supervisor: "Phạm Văn C" },
      { name: "Quần tây", progress: 85, supervisor: "Nguyễn Thị D" },
      { name: "Đầm maxi", progress: 92, supervisor: "Lê Văn E" },
      { name: "Áo hoodie", progress: 20, supervisor: "Trần Văn F" },
      { name: "Áo khoác bomber", progress: 30, supervisor: "Lý Thị G" },
    ],
  });

  useEffect(() => {
    fetch("/api/dashboard-data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p className="p-6 text-gray-500">Đang tải dữ liệu...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4">
        {data.topProducts.map((item) => (
          <div className="bg-white p-4 rounded-lg shadow-md" key={item.name}>
            <h3 className="text-lg font-bold">
              {item.value} {item.unit}
            </h3>
            <p className="text-gray-500">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Kế hoạch sản xuất */}
      {/* <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="font-semibold text-xl mb-4">Kế Hoạch Sản Xuất</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.productionPlan}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="planned" fill="#3b82f6" />
            <Bar dataKey="actual" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {data.productionPlan.map((item) => (
            <div
              key={item.name}
              className="text-sm text-gray-600 bg-gray-50 rounded p-2"
            >
              <p>
                <strong>{item.name}</strong> - {item.team}
              </p>
              <p>Deadline: {item.deadline}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div
        className="bg-white p-4 rounded-lg shadow-md mt-6"
        style={{ height: 400 }}
      >
        <Chart />
      </div>

      {/* Tình hình sản xuất */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="font-semibold text-xl mb-4">Tình Hình Sản Xuất</h3>
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={data.productionStatus}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.productionStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tiến độ sản xuất */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="font-semibold text-xl mb-4">
          Tiến Độ Sản Xuất Theo Nhóm
        </h3>
        {data.productionProgress.map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">{item.name}</span>
              <span className="text-gray-500">
                Phụ trách: {item.supervisor}
              </span>
            </div>
            {/* <Progress value={item.progress} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
