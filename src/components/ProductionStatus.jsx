import React, { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const originalData = [
  { name: "Chưa hoàn thành", value: 5, color: "#FF9800" },
  { name: "Đang sản xuất", value: 6, color: "#2196F3" },
  { name: "Hoàn thành", value: 5, color: "#4CAF50" },
];

const ProductionStatus = ({ isDataEmpty }) => {
  const [data, setData] = useState(originalData);

  useEffect(() => {
    setData(isDataEmpty ? [] : originalData);
  }, [isDataEmpty]);

  const totalOrders = data.reduce((sum, item) => sum + item.value, 0);
  
  // Create equal segments data when all values are 0
  const chartData = data.map(item => ({
    ...item,
    // If all values are 0, set each segment to 1 for equal distribution
    value: totalOrders === 0 ? 1 : item.value
  }));

  // Calculate percentages for labels
  const getPercentage = (value) => {
    if (totalOrders === 0) return '';
    return `${Math.round((value / totalOrders) * 100)}%`;
  };

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
                  fill={totalOrders === 0 ? "#F5F5F5" : entry.color}
                  stroke="none"
                />
              ))}
              {chartData.map((entry, index) => {
                if (totalOrders === 0) return null;
                const percentage = getPercentage(entry.value);
                return (
                  <Label
                    key={`label-${index}`}
                    position="outside"
                    content={({ viewBox: { cx, cy }}) => {
                      const RADIAN = Math.PI / 180;
                      const radius = 100;
                      // Calculate position based on segment
                      const total = chartData.reduce((sum, item) => sum + item.value, 0);
                      let angle = 90; // Start from top
                      for (let i = 0; i < index; i++) {
                        angle += (chartData[i].value / total) * 360;
                      }
                      angle += (entry.value / total) * 360 / 2; // Add half of current segment
                      
                      const x = cx + radius * Math.cos(-RADIAN * angle);
                      const y = cy + radius * Math.sin(-RADIAN * angle);
                      
                      // return (
                      //   <text 
                      //     x={x} 
                      //     y={y} 
                      //     fill={entry.color}
                      //     textAnchor="middle" 
                      //     dominantBaseline="middle"
                      //     fontSize="14"
                      //     fontWeight="500"
                      //   >
                      //     {percentage}
                      //   </text>
                      // );
                    }}
                  />
                );
              })}
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
        {data.map((item, index) => (
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
                color: item.color,
                fontSize: '24px',
                fontWeight: 'bold',
                mb: 0.5
              }}
            >
              {item.value}
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
