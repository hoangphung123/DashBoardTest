import React, { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Sector } from "recharts";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const originalData = [
  { name: "Chưa hoàn thành", value: 5, color: "#FF9800", percentage: "30%" },
  { name: "Đang sản xuất", value: 6, color: "#2196F3", percentage: "40%" },
  { name: "Hoàn thành", value: 5, color: "#4CAF50", percentage: "30%" },
];

const emptyData = [
  { name: "Chưa hoàn thành", value: 1, color: "#F5F5F5", percentage: "0%" },
  { name: "Đang sản xuất", value: 1, color: "#F5F5F5", percentage: "0%" },
  { name: "Hoàn thành", value: 1, color: "#F5F5F5", percentage: "0%" },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, color }) => {
  const RADIAN = Math.PI / 180;
  
  // Calculate the end point for the first line (horizontal)
  const radius = outerRadius * 1.2;
  let x1, x2, y1, y2;

  // Calculate starting point based on section
  if (name === "Hoàn thành") {
    // For the green section, start from the outer edge at around 135 degrees
    const startAngle = -135 * RADIAN; // Adjusted angle to match the middle of the green section
    x1 = cx + outerRadius * Math.cos(startAngle);
    y1 = cy + outerRadius * Math.sin(startAngle);
    
    // Adjust the second point to create a smoother angle
    x2 = cx - 100; // Move further to the left
    y2 = cy - 30; // Adjust height to create a better angle
  } else {
    // For other sections, keep the original calculation
    x1 = cx + outerRadius * Math.cos(-midAngle * RADIAN);
    y1 = cy + outerRadius * Math.sin(-midAngle * RADIAN);
    
    // For other sections
    x2 = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
    y2 = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);
  }
  
  // Third point (end of horizontal line)
  let x3;
  if (name === "Hoàn thành") {
    x3 = cx - radius - 20; // Extend the line further left
    y2 = cy - 30; // Keep the same adjusted height
  } else if (midAngle > 90 && midAngle < 270) {
    x3 = cx - radius; // Left side
  } else {
    x3 = cx + radius; // Right side
  }
  
  return (
    <g>
      {/* First line (from pie to bend) */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={1}
      />
      
      {/* Second line (horizontal) */}
      <line
        x1={x2}
        y1={y2}
        x2={x3}
        y2={y2}
        stroke={color}
        strokeWidth={1}
      />
      
      {/* Percentage text */}
      <text
        x={x3}
        y={y2}
        fill={color}
        textAnchor={name === "Hoàn thành" ? 'end' : (midAngle > 90 && midAngle < 270 ? 'end' : 'start')}
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

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
              labelLine={false}
              label={renderCustomizedLabel}
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
