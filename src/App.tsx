import { useState, useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import Layout from './components/Layout';

import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';
import About from './pages/About';
import Contact from './pages/Contact';

import { CoinsContext } from './CoinsContext';
import { ModeContext } from './ModeContext';

const App: FC = () => {
  const [coins, setCoins] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentMode, setCurrentMode] = useState<'dark' | 'light'>('dark');

  const theme = createTheme({
    palette: {
      mode: currentMode,
      primary: {
        main: '#fff',
        dark: '#000',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
  });

  const getFilteredCoins = (inputValue: string, coins: any) => {
    if (!inputValue) {
      return coins;
    }

    return coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(inputValue)
    );
  };

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setCoins(response.data.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchedCoins = getFilteredCoins(inputValue, coins);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CoinsContext.Provider
            value={{
              coins: coins,
              searchedCoins: searchedCoins,
              inputValue: inputValue,
              setInputValue: setInputValue,
              setCoins: setCoins,
            }}
          >
            <ModeContext.Provider
              value={{ mode: currentMode, setMode: setCurrentMode }}
            >
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/coin/:id" element={<CoinDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            </ModeContext.Provider>
          </CoinsContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
