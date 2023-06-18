export interface SimplePaletteColorOptions {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export type ColorPartial = Partial<Color>;

export type PaletteColorOptions = SimplePaletteColorOptions & ColorPartial;

export interface BasicPalette {
  mode: "light" | "dark";
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  info: PaletteColorOptions;
  warning: PaletteColorOptions;
  success: PaletteColorOptions;
  error: PaletteColorOptions;
  grey: ColorPartial;
}
