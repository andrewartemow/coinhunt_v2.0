import { FC, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { ContentWrapper } from '../components/ContentWrapper';

import { CoinsContext } from '../CoinsContext';
import { TIME_PERIODS } from '../data';

const CoinDetails: FC = () => {
  const [historicalData, setHistoricalData] = useState<any>([]);
  const [timePeriod, setTimePeriod] = useState<string>('24h');
  const { id } = useParams();
  const { coins } = useContext(CoinsContext);

  const currentCoin = coins.find((coin) => coin.uuid === id);

  const fetchCoinHistoricalData = async () => {
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${id}/history`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: timePeriod,
      },
      headers: {
        'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setHistoricalData(response.data.data.history);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoinHistoricalData();
  }, [timePeriod]);

  console.log(currentCoin);

  return (
    <Container>
      <ContentWrapper>
        {currentCoin && (
          <Box
            sx={{
              height: 450,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '33%',
                gap: 2,
                height: '100%',
              }}
            >
              <Paper
                sx={{
                  borderRadius: '15px',
                  width: '100%',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src={currentCoin.iconUrl}
                  alt="failed to load"
                  style={{ marginRight: '20px', maxWidth: '50px' }}
                />
                <Box>
                  <Typography component="h2" variant="h6" fontWeight={400}>
                    {currentCoin.name}
                  </Typography>
                  <Typography variant="body1" my={1}>
                    Rank: {currentCoin.rank}
                  </Typography>
                  <Typography variant="body1" my={1}>
                    Current Price: {currentCoin.price.slice(0, 6)}$
                  </Typography>
                  <Typography variant="body1" my={1}>
                    Market Cap: {currentCoin.marketCap.slice(0, 6)}
                  </Typography>
                  <Typography variant="body1" my={1}>
                    Change: {currentCoin.change}%
                  </Typography>
                </Box>
              </Paper>
              <Paper
                sx={{
                  height: '100%',
                  borderRadius: '15px',
                  width: '100%',
                  padding: '20px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ textAlign: 'center', marginBottom: 2 }}
                >
                  Time Period
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  {TIME_PERIODS.map((period: string) => (
                    <Button
                      variant="outlined"
                      onClick={() => setTimePeriod(period)}
                      color="inherit"
                    >
                      {' '}
                      {period}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Box>

            <Paper
              sx={{
                borderRadius: '15px',
                width: '66%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Line
                data={{
                  labels: historicalData.map((coin: any) => {
                    let date = new Date(coin.timestamp * 1000);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return timePeriod === '24h'
                      ? time
                      : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: historicalData.map((coin: any) => coin.price),
                      label: `Price ( Past ${timePeriod} ) in USD`,
                      borderColor: 'gold',
                      fill: false,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                    },
                  },

                  elements: {
                    point: {
                      radius: 2,
                    },
                  },
                  maintainAspectRatio: false,
                  responsive: true,
                }}
              />
            </Paper>
          </Box>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default CoinDetails;
