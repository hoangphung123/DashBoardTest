import React, { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Box, AppBar, Toolbar, Typography, IconButton, InputBase, Button } from '@mui/material';
import { Search as SearchIcon, RestartAlt } from '@mui/icons-material';
import TopProducts from './components/TopProduct';
import ProductionPlan from './components/ProductPlan';
import TopCustomers from './components/TopCustomers';
import ProductionStatus from './components/ProductionStatus';
import ProductionProgress from './components/ProductionProgress';
import MaterialPurchase from './components/MaterialPurchase';
import ChangeIcon from './assets/vuesax/outline/convertshape-2.png';

// Import icons
import Logo from './assets/Logo.png';
import Group from './assets/Group.png';
import GearIcon from './assets/icon/Gear.png';
import MessageIcon from './assets/vuesax/linear/message-text.png';
import QuestionIcon from './assets/Menu-1.png';
import MenuIcon from './assets/Menu.png';
function App() {
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  const handleReset = () => {
    setIsDataEmpty(prev => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#003399' }}>
        <Toolbar sx={{ gap: 2 }}>
          <Box 
            component="img" 
            src={Group} 
            alt="Group"
            sx={{ height: 32 }}
          />
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Danh mục
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Bán & Xuất hàng
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Mua & Nhập hàng
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Kho & Sản xuất
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Kế toán
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Báo cáo & Thống kê
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Tiện ích
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1, padding: '6px 12px' }}>
              <SearchIcon sx={{ color: 'white', opacity: 0.7 }} />
              <InputBase 
                placeholder="Tìm kiếm..." 
                sx={{ 
                  ml: 1, 
                  color: 'white',
                  '& input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1
                  }
                }} 
              />
            </Box>
            <IconButton 
              onClick={handleReset}
              sx={{ 
                p: 1, 
                color: 'white',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                }
              }}
            >
              <RestartAlt />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={GearIcon} />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={ChangeIcon}  />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={MessageIcon}  />
            </IconButton> 
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={MenuIcon}  />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={QuestionIcon}  />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <Box component="img" src={Logo}  />
            </IconButton>
           
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <TopProducts isDataEmpty={isDataEmpty} />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mt: 3 }}>
          <ProductionPlan isDataEmpty={isDataEmpty} />
          <TopCustomers isDataEmpty={isDataEmpty} />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, mt: 3 }}>
          <ProductionStatus isDataEmpty={isDataEmpty} />
          <ProductionProgress isDataEmpty={isDataEmpty} />
          <MaterialPurchase isDataEmpty={isDataEmpty} />
        </Box>
      </Box>
    </Box>
  );
}

export default App
