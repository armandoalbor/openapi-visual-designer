import { useTheme } from "@/context";
import { hexToRgba } from "@/themes";
import { Box, ButtonBase } from "@mui/material";
import { FC } from "react";

interface Props {
  isActive: boolean;
  onClick: () => void;
  icon?: JSX.Element;
}

export const ToggleSetting: FC<Props> = ({ isActive, onClick, icon }) => {
  const { theme } = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={80}
      sx={{
        backgroundColor: isActive ? "primary.main" : "background.paper",
        borderRadius: 2,
        border: `1px solid ${hexToRgba(
          theme === "dark" ? "#ffffff" : "#000000",
          0.05
        )}`,
      }}
    >
      <ButtonBase onClick={onClick} sx={{ width: "100%", height: "100%" }}>
        {icon}
      </ButtonBase>
    </Box>
  );
};
