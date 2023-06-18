import { Theme } from '@mui/material';

export interface State {
  theme: string;
  currentTheme: Theme;
}

export interface Actions {
  onSelectTheme: (theme: string) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
