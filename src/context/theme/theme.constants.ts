import { createAction } from '@/utils';
import { State } from './theme.types';

export enum Types {
  SET_CURRENT_THEME = 'theme/setTheme',
}

export const reducerActions = {
  setTheme: createAction<Types, State>(Types.SET_CURRENT_THEME),
};
