import { Context, createContext } from 'react';
import { lightTheme } from '@/themes';
import { Action } from '@/utils';
import { State, ContextType } from './theme.types';
import { Types } from './theme.constants';

export const initialState: State = {
  theme: 'light',
  currentTheme: lightTheme,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_CURRENT_THEME:
      const { theme, currentTheme } = action.payload;
      return { ...state, theme: theme, currentTheme: currentTheme };
    default:
      return state;
  }
};

export const ThemeContext: Context<ContextType> = createContext(initialState);
