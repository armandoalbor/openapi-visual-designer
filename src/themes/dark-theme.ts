import { PaletteOptions, createTheme } from "@mui/material";
import { getOverrides } from "./config/overrides";
import { colors } from "./config/colors";
// import { getShadows } from "./config/shadows";
import { BasicPalette } from "./config/types";
import { darkPalette } from "./config/palettes/dark";

const COLOR_SCHEME = "blue";

const palette: PaletteOptions = {
  ...darkPalette,
  mode: "dark",
  primary: colors[COLOR_SCHEME].primaryDark,
  secondary: colors[COLOR_SCHEME].secondary,
  common: {
    black: "#1D1D1D",
    white: "#fff",
  },
};

export const darkTheme = createTheme({
  palette: palette,
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  // shadows: { ...getShadows(palette as BasicPalette) },
  components: { ...getOverrides(palette as BasicPalette) },
});
