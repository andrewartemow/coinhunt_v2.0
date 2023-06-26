import { Dispatch, SetStateAction, createContext } from 'react';

interface IThemeContext {
  mode: string;
  setMode: Dispatch<SetStateAction<'dark' | 'light'>>;
}
export const ModeContext = createContext<IThemeContext>({
  mode: '',
  setMode: () => {},
});
