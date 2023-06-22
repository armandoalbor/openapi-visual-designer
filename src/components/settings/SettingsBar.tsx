import { FC } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
  useTheme as useThemeMui,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { hexToRgba } from "@/themes";
import { Sizes } from "@/models";
import { ThemeSelector } from "./ThemeSelector";
import { LanguageSelector } from "./LanguageSelector";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SettingsBar: FC<Props> = ({ open, onClose }) => {
  const theme = useThemeMui();

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        classes={{ paper: "transparent-drawer" }}
      >
        <Box width={300}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height={Sizes.APPBAR_HEIGHT}
            px={2}
          >
            <Typography variant="body1" textTransform="uppercase">
              Configuración
            </Typography>

            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          <Divider
            sx={{
              borderBottom: `1px dashed ${hexToRgba(
                theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                0.05
              )}`,
            }}
          />

          <ThemeSelector />
          <LanguageSelector />
        </Box>
      </Drawer>
    </div>
  );
};
