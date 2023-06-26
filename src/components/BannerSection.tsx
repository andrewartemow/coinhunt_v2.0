import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, Button, Paper } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Slider from 'react-slick';

import Section from './Section';

import { CoinsContext } from '../CoinsContext';

interface BannerSectionProps {
  styles?: any;
  scrollToSection: () => void;
}

const BannerSection: FC<BannerSectionProps> = ({ styles, scrollToSection }) => {
  const { coins } = useContext(CoinsContext);
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section styles={{ ...styles, paddingTop: 10 }}>
      <Box
        sx={{
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <CurrencyBitcoinIcon sx={{ fontSize: '80px' }} />
        <Typography component="h1" variant="h4" fontWeight={500}>
          We track the rate of cryptocurrencies
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ marginBottom: 8 }}
        onClick={scrollToSection}
      >
        Try it out
      </Button>
      {!!coins.length && (
        <Box component="div" sx={{ width: '90%' }}>
          <Slider {...settings}>
            {coins.map((coin: any) => (
              <Box
                key={coin.uuid}
                sx={{
                  display: 'flex !important',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // padding: '10px',
                  borderRadius: '15px',
                  height: 80,
                  cursor: 'pointer',
                }}
                onClick={() => navigate(`/coin/${coin.uuid}`)}
              >
                <img
                  src={coin.iconUrl}
                  alt="failed to load"
                  style={{ maxWidth: '40px' }}
                />
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {coin.name}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Section>
  );
};

export default BannerSection;
