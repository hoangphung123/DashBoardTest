import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Empty data with just the structure for Y-axis labels
const emptyData = [
  { name: '-', value: 0 },
  { name: '-', value: 0 },
  { name: '-', value: 0 },
  { name: '-', value: 0 },
  { name: '-', value: 0 },
];

const data =  [
  { name: 'Công ty CNT Happy Point', value: 2100 },
  { name: 'Công ty May ngọc Saigon Hanoi', value: 1950 },
  { name: 'Outlet Lemon apparel', value: 1800 },
  { name: 'Shop quần áo mechanic focus', value: 1600 },
  { name: 'Shop thời trang công sở Basic Office', value: 1400 },
]

const CustomizedLabel = ({ x, y, width, value }) => {
    return (
        <text x={x + width + 5} y={y + 15} fill="#000" fontSize={12}>
            {value}
        </text>
    );
};

const TopCustomers = () => {
  const chartData = data.length > 0 ? data : emptyData;

  return (
    <Paper sx={{ p: 2, height: '500px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
          Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
        </Typography>
        <Box sx={{ 
          border: '1px solid #E0E0E0', 
          borderRadius: 1, 
          px: 2, 
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          
        }}>
          <Typography variant="body2" sx={{ color: '#666' }}>Năm nay</Typography>
        </Box>
      </Box>
      <Box sx={{ height: 'calc(100% - 68px)', width: '100%', padding: '4px 12px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
            barSize={10}
          >
            <CartesianGrid 
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
            />
            <XAxis 
              type="number" 
              label={{ value: "Sản lượng", position: "insideLeft", offset: -90 }}
              tickMargin={6}
              axisLine={false}
              tickLine={false}
              domain={[0, 3200]}
              ticks={[0, 800, 1600, 2400, 3200]}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              dataKey="name" 
              label={{ value: "Khách hàng", position: "insideTop", offset: 0 }}
              type="category" 
              axisLine={false}
              tickLine={false}
              width={100}
              tick={{ 
                fontSize: 12,
                fill: '#666'
              }}
            />
            <Tooltip />
            {chartData && (
              <Bar 
                dataKey="value" 
                fill="#1976D2"
                radius={[0, 4, 4, 0]}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default TopCustomers;