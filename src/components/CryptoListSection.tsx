import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Section from './Section';

import { CoinsContext } from '../CoinsContext';

interface CryptoListSectionProps {
  sectionRef?: any;
}

const CryptoListSection: FC<CryptoListSectionProps> = ({ sectionRef }) => {
  const { searchedCoins, inputValue, setInputValue } = useContext(CoinsContext);
  const { palette } = useTheme();
  const navigate = useNavigate();

  const rows = searchedCoins.map((coin) => {
    return {
      id: coin.uuid,
      icon: coin.iconUrl,
      name: coin.name,
      price: coin.price,
      change: coin.change,
      marketCap: coin.marketCap,
    };
  });

  const chooseColor = (number: number) =>
    number <= 0 ? palette.error.main : palette.success.main;

  return (
    <Section sectionRef={sectionRef}>
      <TextField
        label="crypto name"
        variant="outlined"
        size="medium"
        sx={{
          marginBottom: '20px',
          maxWidth: '400px',
          width: '100%',
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <TableContainer component={Paper} sx={{ borderRadius: '15px' }}>
        <Table
          sx={{ minWidth: 650, padding: '20px' }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" width={1}>
                Icon
              </TableCell>
              <TableCell align="left" width={1}>
                Name
              </TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Market Cap</TableCell>
              <TableCell align="center" width={1}>
                24h
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { opacity: 0.5, cursor: 'pointer' },
                }}
                onClick={() => navigate(`/coin/${row.id}`)}
              >
                <TableCell align="center">
                  <img
                    src={row.icon}
                    style={{ maxWidth: '50px' }}
                    alt="failed to load"
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  ${Number(row.price).toFixed(4)}
                </TableCell>
                <TableCell align="center">
                  ${Number(row.marketCap).toFixed(4)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: chooseColor(row.change) }}
                >
                  {row.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default CryptoListSection;
