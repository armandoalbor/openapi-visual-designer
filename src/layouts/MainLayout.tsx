// @ts-nocheck
import { FC, PropsWithChildren, useState, FunctionComponent } from "react";
import { AppBar, Box, Toolbar, styled, useTheme } from "@mui/material";
import { Header, Sidebar } from "@/components/ui";
import { Sizes } from "@/models";
import { SettingsBar } from "@/components/settings";
import { useUI } from "@/context";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    transition: theme.transitions.create(
      "margin",
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
    [theme.breakpoints.up("md")]: {
      marginLeft: open ? Sizes.SIDEBAR_WIDTH - 20 : 0,
      //   width: `calc(100% - ${Sizes.SIDEBAR_WIDTH}px)`,
      //   width: open ? `calc(100% - ${Sizes.SIDEBAR_WIDTH}px)` : "100%",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      //   width: `calc(100% - ${Sizes.SIDEBAR_WIDTH}px)`,
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      //   width: `calc(100% - ${Sizes.SIDEBAR_WIDTH}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  })
);

interface Props extends PropsWithChildren {}

export const MainLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { sideBarIsOpen, settingsBarIsOpen, actions } = useUI();

  return (
    <Box>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: sideBarIsOpen
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header
            toggleSidebar={actions?.toggleSideBar}
            sidebarIsOpen={sideBarIsOpen}
          />
        </Toolbar>
      </AppBar>

      <Sidebar
        drawerOpen={sideBarIsOpen}
        drawerToggle={actions?.toggleSideBar}
      />

      <Main theme={theme} open={sideBarIsOpen}>
        <Box m={2} sx={{ mt: `${Sizes.APPBAR_HEIGHT}px` }}>
          <Box
            height="100vh"
            sx={{
              backgroundColor: theme.palette.common.layoutBg,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              p: 2,
            }}
          >
            <Box
              // boxShadow={8}
              sx={{
                backgroundColor: "background.default",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <SettingsBar
                open={settingsBarIsOpen}
                onClose={actions?.toggleSettingsBar}
              />

              {children}
            </Box>
          </Box>
        </Box>
      </Main>
    </Box>
  );
};
