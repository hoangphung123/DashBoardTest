import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EmptyImage from '../assets/stack.png';

const data = [
  { name: "Hải long", plan: 60, actual: 40 },
  { name: "Áo len lỡ", plan: 80, actual: 65 },
  { name: "Áo sơ mi", plan: 70, actual: 30 },
  { name: "Áo thun polo", plan: 65, actual: 45 },
  { name: "Quần baggy", plan: 75, actual: 50 },
  { name: "Quần jogger", plan: 85, actual: 55 },
];

// Tạo dữ liệu trống cho trục X
const emptyData = [
  { name: "-" },
  { name: "-" },
  { name: "-" },
  { name: "-" },
  { name: "-" },
];

const ProductionPlan = () => {
  const chartData = data.length > 0 ? data : emptyData;
  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Kế Hoạch Sản Xuất</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          bgcolor: '#fff', 
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '4px 12px'
        }}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 20, mr: 1, color: '#666' }} />
          <Typography variant="subtitle2" sx={{ color: '#666' }}>Quý này</Typography>
        </Box>
      </Box>

      
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={chartData} barCategoryGap="30%" margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="name"
              label={{ value: "Mặt Hàng", position: "insideLeft", offset: -65, dy: 6 }}
              tickMargin={10}
            />
            <YAxis
            label={{
              value: "Cái",
              position: "insideTop",
              offset: -30,
            }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          
            />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ top: 30 }} />
            <Bar dataKey="plan" name="Kế hoạch" fill="#3B92F2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actual" name="Thực hiện" fill="#52D19D" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
    
    </Paper>
  );
};

export default ProductionPlan;
