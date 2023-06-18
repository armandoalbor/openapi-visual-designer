import { Components, Theme } from "@mui/material";
import { hexToRgba } from "../helpers";
import { BasicPalette } from "./types";

export const getOverrides = (
  palette: BasicPalette
): Components<Omit<Theme, "components">> => {
  const isDark = palette.mode === "dark";

  return {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiDrawer: {
      // styleOverrides: {
      //   root: {},
      //   paper: {
      //     "& > svg": {
      //       fill: "#ffffff",
      //     },
      //     backdropFilter: "blur(6px)",
      //     boxShadow: "none",
      //     color: palette.primary.contrastText,
      //     background: `linear-gradient(0.12deg, ${hexToRgba(
      //       "#00663E",
      //       isDark ? 0.7 : 1
      //     )}  33.22%,
      //     ${hexToRgba("#0BB156", isDark ? 0.7 : 1)} 101.06%)`,
      //   },
      // },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: 80,
          // background: `linear-gradient(270deg, ${
          //   palette.primary.dark
          // } 0%, ${hexToRgba(
          //   palette.primary.light,
          //   isDark ? 0.7 : 1
          // )} 40%, ${hexToRgba(palette.primary.main, isDark ? 0.6 : 1)} 100%)`,
          // borderBottom: `3px solid ${palette.primary[600]}`,
          backdropFilter: "blur(6px)",
          // marginTop: 80,
          // position: 'absolute',
        },
      },
    },
  };
};
