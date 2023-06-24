import { FC, cloneElement } from "react";
import { ButtonBase, Box, Typography } from "@mui/material";

interface Props {
  text: string;
  icon: JSX.Element;
  isActive: boolean;
  onClick?: () => void;
}

export const MenuItem: FC<Props> = ({ text, icon, isActive, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      <Box
        display="flex"
        flexDirection="column"
        justifyItems="center"
        alignItems="center"
        p={4}
      >
        {cloneElement(icon, { color: isActive ? "secondary" : undefined })}

        <Typography color={isActive ? "secondary" : undefined}>
          {text}
        </Typography>
      </Box>
    </ButtonBase>
  );
};
