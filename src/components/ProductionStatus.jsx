import React, { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const originalData = [
  { name: "Chưa hoàn thành", value: 5, color: "#FF9800" },
  { name: "Đang sản xuất", value: 6, color: "#2196F3" },
  { name: "Hoàn thành", value: 5, color: "#4CAF50" },
];

const emptyData = [
  { name: "Chưa hoàn thành", value: 1, color: "#F5F5F5" },
  { name: "Đang sản xuất", value: 1, color: "#F5F5F5" },
  { name: "Hoàn thành", value: 1, color: "#F5F5F5" },
];

const ProductionStatus = ({ isDataEmpty }) => {
  const [data, setData] = useState(originalData);

  useEffect(() => {
    setData(isDataEmpty ? [] : originalData);
  }, [isDataEmpty]);

  const totalOrders = data.reduce((sum, item) => sum + item.value, 0);
  
  // Use empty data when there's no data
  const chartData = data.length > 0 ? data : emptyData;

  return (
    <Paper sx={{ p: 2, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tình Hình Sản Xuất</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          bgcolor: '#fff', 
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '4px 12px'
        }}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 20, mr: 1, color: '#666' }} />
          <Typography variant="subtitle2" sx={{ color: '#666' }}>Hôm nay</Typography>
        </Box>
      </Box>

      <Box sx={{ height: 300, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={4}
              dataKey="value"
              blendStroke
              cornerRadius={6}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold", 
              mb: 0.5,
              fontSize: '48px',
              color: '#333'
            }}
          >
            {totalOrders}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              fontSize: '14px'
            }}
          >
            Lệnh sản xuất
          </Typography>
        </Box>
      </Box>

      {/* Legend */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          gap: 2,
        }}
      >
        {originalData.map((item, index) => (
          <Box 
            key={index}
            sx={{
              flex: 1,
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: data.length > 0 ? item.color : '#666',
                fontSize: '24px',
                fontWeight: 'bold',
                mb: 0.5
              }}
            >
              {data.length > 0 ? item.value : 0}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#666',
                fontSize: '14px'
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ProductionStatus;
