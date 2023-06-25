import { Components, Theme } from "@mui/material";
import { hexToRgba } from "../helpers";
import { BasicPalette } from "./types";
import { grey } from "@mui/material/colors";
import { Sizes } from "@/models";
import { getShadows } from "./shadows";

export const getOverrides = (
  palette: BasicPalette
): Components<Omit<Theme, "components">> => {
  const isDark = palette.mode === "dark";
  const shadows = getShadows(palette);

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
          borderRadius: 32,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: isDark ? "rgb(26, 34, 63)" : "#ffffff",
          // boxShadow: shadows[1],
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isDark ? "rgba(189, 200, 240, 0.157)" : grey[300],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.action.disabledBackground,
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .transparent-drawer": {
            backdropFilter: `blur(${palette.mode === "dark" ? 20 : 12}px)`,
            // background: "transparent",
            // backgroundColor: "rgba(19, 20, 22, 0.14)",

            backgroundColor: hexToRgba(
              grey[palette.mode === "dark" ? 900 : 200],
              palette.mode === "dark" ? 0.5 : 0.25
            ),

            boxShadow: `${
              palette.mode === "dark"
                ? "rgba(19, 20, 22, 0.5)"
                : "rgba(145, 158, 171, 0.34)"
            } -40px 40px 80px -8px`,
            backgroundImage:
              "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
            backgroundPositionX: "100%, 0%",
            backgroundPositionY: "0%, 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%, 50%",
          },
        },
        paper: {},
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: Sizes.APPBAR_HEIGHT,
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
