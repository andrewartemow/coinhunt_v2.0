import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Toolbar, Link, useTheme } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Footer: FC = () => {
  const { palette } = useTheme();

  const navigate = useNavigate();

  const pages = [
    { name: 'About me', href: '/about' },
    { name: 'Contact me', href: '/contact' },
  ];

  return (
    <Toolbar
      sx={{
        backgroundColor: palette.background.default,
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        boxShadow: '0px -6px 10px 0px rgba(0,0,0,0.1)',
      }}
    >
      <Link
        href="/"
        sx={{
          mr: 2,
          display: 'flex',
          color: 'inherit',
        }}
      >
        <CurrencyBitcoinIcon />
      </Link>
      {pages.map((page) => (
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(page.href)}
          textAlign="center"
        >
          {page.name}
        </Typography>
      ))}
    </Toolbar>
  );
};

export default Footer;
