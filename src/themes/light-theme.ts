import { PaletteOptions, createTheme } from "@mui/material";
import { getOverrides } from "./config/overrides";
import { colors } from "./config/colors";
// import { getShadows } from "./config/shadows";
import { BasicPalette } from "./config/types";
import { lightPalette } from "./config/palettes/light";
import { grey } from "@mui/material/colors";

const COLOR_SCHEME = "blue";

const palette: PaletteOptions = {
  ...lightPalette,
  mode: "light",
  primary: colors[COLOR_SCHEME].primary,
  secondary: colors[COLOR_SCHEME].secondary,
  common: {
    black: "#1D1D1D",
    white: "#fff",
    layoutBg: "#f5f5f5",
    mainContainerBg: "#fcfcfc",
    settingOn: "white",
    inputBg: "#ffffff",
    inputBorderColor: grey[300],
  },
};

export const lightTheme = createTheme({
  palette: palette,
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  // shadows: { ...getShadows(palette as BasicPalette) },
  components: { ...getOverrides(palette as BasicPalette) },
});
