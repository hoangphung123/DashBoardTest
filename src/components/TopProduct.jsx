import React from 'react';
import { Box, Paper, Typography, Card, CardContent } from '@mui/material';
import arrowUp from '../assets/arrow-up.png';
import arrowDown from '../assets/arrow-down.png';

const products = [
    { count: 48, name: 'Áo sơ mi dài tay', percentage: 8.2, trend: 'up' },
    { count: 18, name: 'Quần tây', percentage: -5, trend: 'down' },
    { count: 40, name: 'Áo hoodie', percentage: 12, trend: 'up' },
    { count: 23, name: 'Đầm maxi', percentage: 3.5, trend: 'up' },
    { count: 48, name: 'Áo thun cổ tròn', percentage: 4.7, trend: 'up' },
];

const TopProducts = () => {
  const hasData = products.some(product => product.count > 0);

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </Typography>
        <Box sx={{ 
          border: '1px solid #E0E0E0', 
          borderRadius: 1, 
          px: 2, 
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <Typography variant="body2" sx={{ color: '#666' }}>Tháng này</Typography>
        </Box>
      </Box>
      
      {hasData ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          {products.map((product, index) => (
            <Card 
              key={index} 
              sx={{ 
                flex: 1, 
                minWidth: 150,
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.06)',
                borderRadius: 2,
                position: 'relative'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  display: 'flex', 
                  alignItems: 'center',
                  color: product.trend === 'up' ? '#4CAF50' : '#F44336'
                }}
              >
                <img 
                  src={product.trend === 'up' ? arrowUp : arrowDown} 
                  alt={product.trend === 'up' ? "Tăng" : "Giảm"}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  {Math.abs(product.percentage)}%
                </Typography>
              </Box>
              <CardContent>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 1, 
                    color: '#2F80ED',
                    fontSize: '1.8rem',
                    fontWeight: 600
                  }}
                >
                  {product.count}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#333',
                    fontSize: '0.9rem'
                  }}
                >
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card 
              key={index} 
              sx={{ 
                flex: 1, 
                minWidth: 150,
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.06)',
                borderRadius: 2
              }}
            >
              <CardContent>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 1, 
                    color: '#2F80ED',
                    fontSize: '1.8rem',
                    fontWeight: 600
                  }}
                >
                  0
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#666',
                    fontSize: '0.9rem'
                  }}
                >
                  Chưa có mặt hàng
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default TopProducts; 