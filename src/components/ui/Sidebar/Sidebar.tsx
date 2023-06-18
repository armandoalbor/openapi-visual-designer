import { FC } from "react";
import {
  Box,
  Chip,
  Drawer,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Code, ColorLens, DoneAll } from "@mui/icons-material";
import { Sizes } from "@/models";
import { Logo } from "@/components/ui/Header/Logo";
import { MenuItem } from "./MenuItem";

interface Props {
  drawerOpen: boolean;
  drawerToggle: () => void;
}

export const Sidebar: FC<Props> = ({ drawerOpen, drawerToggle }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{ display: "flex", p: 2, mx: "auto", justifyContent: "center" }}
        >
          <Logo />
        </Box>
      </Box>

      <Box
        sx={{
          px: 2,
          ml: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          height: `calc(100% - ${Sizes.APPBAR_HEIGHT}px)`,
        }}
      >
        <Box textAlign="center">
          <MenuItem text="Designer" icon={<ColorLens fontSize="large" />} />
          <MenuItem text="Code" icon={<Code fontSize="large" />} />
          <MenuItem text="Validator" icon={<DoneAll fontSize="large" />} />
        </Box>

        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
          <Chip
            label={"v18.9.2"}
            disabled
            color="secondary"
            size="medium"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
      </Box>
      {/* </MobileView> */}
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? Sizes.SIDEBAR_WIDTH : "auto",
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: Sizes.SIDEBAR_WIDTH - 20,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: `${Sizes.APPBAR_HEIGHT}px`,
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
