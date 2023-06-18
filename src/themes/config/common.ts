import { breakpoints } from "./breakpoints";

const THEME_SPACING = 8;

export const common = {
  spacing: THEME_SPACING,
  breakpoints: {
    keys: Object.keys(breakpoints),
    values: breakpoints,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      [`@media (min-width: ${breakpoints.xs}px) and (orientation: landscape)`]:
        {
          minHeight: 48,
        },
      [`@media (min-width: ${breakpoints.sm}px)`]: {
        minHeight: 64,
      },
      [`@media (min-width: ${breakpoints.lg}px)`]: {
        minHeight: 92,
      },
    },
    getSideMenu: (mini: boolean) => ({
      width: mini ? 100 : 279,
    }),
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  shape: {
    borderRadius: THEME_SPACING,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};
