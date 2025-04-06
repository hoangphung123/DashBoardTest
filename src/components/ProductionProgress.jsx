import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";

const originalData = [
  { name: "Áo sơ mi dài tay", completed: 123, total: 150 },
  { name: "Áo sơ mi cổ tròn", completed: 321, total: 450 },
  { name: "Quần baggy", completed: 231, total: 500 },
  { name: "Quần tây", completed: 599, total: 1000 },
  { name: "Đầm maxi", completed: 876, total: 1000 },
  { name: "Áo hoodie", completed: 765, total: 1000 },
  { name: "Áo khoác bomber", completed: 543, total: 750 },
];

const ProductionProgress = ({ isDataEmpty }) => {
  const [data, setData] = useState(originalData);

  useEffect(() => {
    setData(isDataEmpty ? [] : originalData);
  }, [isDataEmpty]);

  const defaultData = Array(7).fill({
    name: "Chưa có mặt hàng",
    completed: 0,
    total: 0,
  });
  const displayData = data.length > 0 ? data : defaultData;

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
        <Typography variant="h6">Tiến Độ Sản Xuất Theo Nhóm</Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          Hoàn thành
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {displayData.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
               <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</Typography>
              {item.total > 0 && (
                <Typography variant="body2" color="text.secondary">
                  {item.completed} cái (
                  {Math.round((item.completed / item.total) * 100)}%)
                </Typography>
              )}
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.total > 0 ? (item.completed / item.total) * 100 : 0}
              sx={{
                height: 8,
                borderRadius: 4,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#2DC585",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ProductionProgress;
