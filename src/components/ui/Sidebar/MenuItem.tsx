import { FC } from "react";
import { ButtonBase, Box, Typography } from "@mui/material";

interface Props {
  text: string;
  icon: JSX.Element;
  onClick?: () => void;
}

export const MenuItem: FC<Props> = ({ text, icon, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      <Box
        display="flex"
        flexDirection="column"
        justifyItems="center"
        alignItems="center"
        p={4}
      >
        {icon}
        <Typography>{text}</Typography>
      </Box>
    </ButtonBase>
  );
};
