import React, { useState } from 'react'
import './App.css'
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  InputBase, 
  Button, 
  useTheme, 
  useMediaQuery,
  Menu,
  MenuItem,
  Drawer,
  Tooltip
} from '@mui/material';
import { Search as SearchIcon, RestartAlt, Menu as MenuIconMUI } from '@mui/icons-material';
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
import QuestionIcon from './assets/Vector1.png';
import MenuIcon from './assets/Vector.png';

const menuItems = [
  'Danh mục',
  'Bán & Xuất hàng',
  'Mua & Nhập hàng',
  'Kho & Sản xuất',
  'Kế toán',
  'Báo cáo & Thống kê',
  'Tiện ích'
];

function App() {
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();
  const isExtraLargeScreen = useMediaQuery('(min-width:1500px)');
  const isMediumLargeScreen = useMediaQuery('(min-width:1400px)');
  const isLargeScreen = useMediaQuery('(min-width:1300px)');
  const isMenuVisible = useMediaQuery('(min-width:1200px)');
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleReset = () => {
    setIsDataEmpty(prev => !prev);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleSearchClick = () => {
    if (!isLargeScreen) {
      setSearchOpen(!searchOpen);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#003399' }}>
        <Toolbar sx={{ gap: 2 }}>
          <Box 
            component="img" 
            src={Group} 
            alt="Group"
            sx={{ height: isExtraSmallScreen ? 24 : 32 }}
          />

          {/* Menu for larger screens */}
          {isMenuVisible && (
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              overflow: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}>
              {menuItems.map((text) => (
                <Button 
                  key={text}
                  sx={{ 
                    color: 'white',
                    textTransform: 'none',
                    fontSize: isExtraLargeScreen 
                      ? '1rem' 
                      : isMediumLargeScreen 
                      ? '14px' 
                      : '12px',
                    whiteSpace: 'nowrap',
                    padding: isExtraLargeScreen ? '8px 16px' : '6px 8px',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                  }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}

          {/* Hamburger menu for small screens */}
          {!isMenuVisible && (
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ ml: 1 }}
            >
              <MenuIconMUI />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Search box */}
            {isMediumLargeScreen ? (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                borderRadius: 1, 
                padding: '6px 12px',
                width: 'auto'
              }}>
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
            ) : (
              <>
                <Tooltip title="Tìm kiếm">
                  <IconButton 
                    onClick={handleSearchClick}
                    sx={{ 
                      color: 'white',
                      backgroundColor: searchOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                {searchOpen && (
                  <Box sx={{ 
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    zIndex: 1000
                  }}>
                    <InputBase 
                      autoFocus
                      placeholder="Tìm kiếm..." 
                      sx={{ 
                        width: '200px',
                        color: '#333',
                        '& input::placeholder': {
                          color: '#666',
                          opacity: 1
                        }
                      }} 
                    />
                  </Box>
                )}
              </>
            )}

            {/* Other icons */}
            <IconButton 
              onClick={handleReset}
              sx={{ color: 'white' }}
            >
              <RestartAlt sx={{ fontSize: isLargeScreen ? '24px' : '20px' }} />
            </IconButton>
            {[
              { icon: GearIcon },
              { icon: ChangeIcon },
              { icon: MessageIcon },
              { icon: MenuIcon },
              { icon: QuestionIcon },
              { icon: Logo }
            ].map((item, index) => (
              <IconButton key={index}>
                <Box 
                  component="img" 
                  src={item.icon} 
                  sx={{ 
                    width: isLargeScreen ? '24px' : '20px',
                    height: isLargeScreen ? '24px' : '20px'
                  }} 
                />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: '#003399',
            color: 'white'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {menuItems.map((text) => (
            <MenuItem 
              key={text} 
              onClick={handleMobileMenuClose}
              sx={{
                py: 1.5,
                fontSize: '12px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              {text}
            </MenuItem>
          ))}
        </Box>
      </Drawer>

      <Box sx={{ p: !isMenuVisible ? 2 : 3 }}>
        <TopProducts isDataEmpty={isDataEmpty} />
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: !isMenuVisible ? '1fr' : '1fr 1fr', 
          gap: 3, 
          mt: 3 
        }}>
          <ProductionPlan isDataEmpty={isDataEmpty} />
          <TopCustomers isDataEmpty={isDataEmpty} />
        </Box>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: !isMenuVisible ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr', 
          gap: 3, 
          mt: 3 
        }}>
          <ProductionStatus isDataEmpty={isDataEmpty} />
          <ProductionProgress isDataEmpty={isDataEmpty} />
          <MaterialPurchase isDataEmpty={isDataEmpty} />
        </Box>
      </Box>
    </Box>
  );
}

export default App
