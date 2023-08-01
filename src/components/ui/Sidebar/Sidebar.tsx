import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Box,
  Chip,
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Code,
  ColorLens,
  DoneAll,
  Palette,
  Settings,
} from "@mui/icons-material";
import { Sizes } from "@/models";
import { Logo } from "@/components/ui/Header/Logo";
import { MenuItem } from "./MenuItem";
import { useUI } from "@/context";

interface Props {
  drawerOpen: boolean;
  drawerToggle: () => void;
}

export const Sidebar: FC<Props> = ({ drawerOpen, drawerToggle }) => {
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const { actions } = useUI();

  const renderDrawer = () => {
    const menuItems = [
      {
        text: "Designer",
        icon: <ColorLens fontSize="large" />,
        route: "/designer/general",
      },
      {
        text: "Code",
        icon: <Code fontSize="large" />,
        route: "/code",
      },
      {
        text: "Validator",
        icon: <DoneAll fontSize="large" />,
        route: "/validator",
      },
    ];

    return (
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
            {menuItems.map((menu) => (
              <MenuItem
                isActive={location.pathname.includes(menu.route)}
                key={menu.text}
                text={menu.text}
                onClick={() => {
                  history.push(menu.route);
                }}
                icon={menu.icon}
              />
            ))}
          </Box>

          <Stack direction="column" justifyContent="center" sx={{ mb: 2 }}>
            <IconButton
              sx={{ p: 2 }}
              onClick={() => history.push("/dev/styleguide")}
            >
              <Palette fontSize="large" />
            </IconButton>

            <IconButton
              sx={{ p: 2, mb: 2 }}
              onClick={actions?.toggleSettingsBar}
            >
              <Settings fontSize="large" />
            </IconButton>

            <Chip
              label={"v18.9.2"}
              disabled
              size="medium"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </Box>
        {/* </MobileView> */}
      </>
    );
  };

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
        {renderDrawer()}
      </Drawer>
    </Box>
  );
};
