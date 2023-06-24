import { FC } from "react";
import { BoxProps, styled, Box } from "@mui/material";

interface AnimatedBoxProps extends BoxProps {
  open: boolean;
}

export const AnimatedBox: FC<AnimatedBoxProps> = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    transition: theme.transitions.create(
      "width",
      open
        ? {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }
        : {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }
    ),
  })
);
