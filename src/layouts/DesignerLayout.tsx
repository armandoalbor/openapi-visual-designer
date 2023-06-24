import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { AnimatedBox } from "@/components";
import { useUI } from "@/context";
import { Sizes } from "@/models";

interface Props extends PropsWithChildren {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

export const DesignerLayout: FC<Props> = ({
  children,
  leftComponent,
  //   rightComponent,
}) => {
  const { designerTabsIsOpen } = useUI();

  return (
    <Box
      display="flex"
      width={1}
      sx={{ height: `calc(100vh - ${Sizes.APPBAR_HEIGHT - 48}px)` }}
    >
      <Box display="flex" flexDirection="row" width={1}>
        <AnimatedBox
          open={designerTabsIsOpen}
          sx={{ width: (1 / 12) * (designerTabsIsOpen ? 3.5 : 0) }}
        >
          {leftComponent}
        </AnimatedBox>
        <Box sx={{ width: (1 / 12) * (designerTabsIsOpen ? 8.5 : 12) }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
