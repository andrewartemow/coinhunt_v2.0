import { Dispatch, SetStateAction, createContext } from 'react';

interface ICoinsContext {
  coins: any[];
  searchedCoins: any[];
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setCoins: Dispatch<SetStateAction<never[]>>;
}

export const CoinsContext = createContext<ICoinsContext>({
  coins: [],
  searchedCoins: [],
  inputValue: '',
  setInputValue: () => {},
  setCoins: () => {},
});
