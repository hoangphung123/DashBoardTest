import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IconButton } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Image1 from '../assets/Image1.png';
import EmptyImage from '../assets/stack.png';

const originalMaterials = [
  { stt: 1, name: 'Chỉ cotton', id: 'NVL_000014', unit: 'Cuộn', quantity: 8 },
  { stt: 2, name: 'Vải lụa', id: 'NVL_000024', unit: 'Mét', quantity: 8 },
  { stt: 3, name: 'Vải lót', id: 'NVL_000024', unit: 'Mét', quantity: 8 },
  { stt: 4, name: 'Vải chống thấm', id: 'NVL_000024', unit: 'Mét', quantity: 8 }
];

const MaterialPurchase = ({ isDataEmpty }) => {
  const [materials, setMaterials] = useState(originalMaterials);

  useEffect(() => {
    setMaterials(isDataEmpty ? [] : originalMaterials);
  }, [isDataEmpty]);

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Nguyên Vật Liệu Cần Mua</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          bgcolor: '#fff', 
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '4px 12px'
        }}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 20, mr: 1, color: '#666' }} />
          <Typography variant="subtitle2" sx={{ color: '#666' }}>Tuần này</Typography>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
              <TableCell>STT</TableCell>
              <TableCell>Nguyên vật liệu</TableCell>
              <TableCell>Đơn vị tính</TableCell>
              <TableCell align="right">Số lượng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materials.map((material) => (
              <TableRow key={material.stt}>
                <TableCell>{material.stt}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ 
                      bgcolor: '#f5f5f5', 
                      borderRadius: '8px',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img src={Image1} alt="material icon" style={{ width: '24px', height: '24px' }} />
                    </Box>
                    <Box>
                      <Typography>{material.name}</Typography>
                      <Typography sx={{ color: '#0066ff', fontSize: '0.875rem' }}>{material.id}</Typography>
                      <Typography sx={{ color: '#666', fontSize: '0.875rem' }}>(none)</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{material.unit}</TableCell>
                <TableCell align="right">{material.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Empty state */}
      {materials.length === 0 && (
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
            bgcolor: '#fff'
          }}
        >
          <Box
            component="img"
            src={EmptyImage}
            alt="No data"
            sx={{ 
              width: 200,
              height: 'auto',
              mb: 2,
              opacity: 0.8
            }}
          />
          <Typography 
            sx={{ 
              color: '#666',
              fontSize: '16px'
            }}
          >
            Chưa có dữ liệu
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default MaterialPurchase; 