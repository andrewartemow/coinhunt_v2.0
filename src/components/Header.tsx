import React from 'react';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import Switch from '@mui/material/Switch';

import { ModeContext } from '../ModeContext';

const pages = [
  { name: 'About me', href: '/about' },
  { name: 'Contact me', href: '/contact' },
];

const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const { mode, setMode } = useContext(ModeContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <CurrencyBitcoinIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <CurrencyBitcoinIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Typography>
          <Switch
            sx={{ display: { xs: 'flex', md: 'none' } }}
            color="default"
            onClick={() =>
              mode === 'dark' ? setMode('light') : setMode('dark')
            }
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => navigate(page.href)}
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.href)}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Switch
            sx={{ display: { xs: 'none', md: 'flex' } }}
            color="default"
            onClick={() =>
              mode === 'dark' ? setMode('light') : setMode('dark')
            }
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
