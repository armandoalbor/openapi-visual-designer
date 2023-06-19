import { Sizes } from "@/models";
import { Box, Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

export const DesignerLayout: FC<Props> = ({
  children,
  leftComponent,
  //   rightComponent,
}) => {
  return (
    <Box
      display="flex"
      width={1}
      sx={{ height: `calc(100vh - ${Sizes.APPBAR_HEIGHT - 48}px)` }}
    >
      <Grid container spacing={0}>
        <Grid item md={4} lg={4}>
          {leftComponent}
        </Grid>
        <Grid item md={8} lg={8}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
