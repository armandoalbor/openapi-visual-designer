// @ts-nocheck
import { FC, PropsWithChildren, useState } from "react";
import { AppBar, Box, Toolbar, styled, useTheme } from "@mui/material";
import { Header, Sidebar } from "@/components/ui";
import { Sizes } from "@/models";
import { SettingsDrawer } from "@/components/settings";

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
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: openSidebar ? theme.transitions.create("width") : "none",
        }}
      >
        <Toolbar>
          <Header toggleSidebar={toggleSidebar} sidebarIsOpen={openSidebar} />
        </Toolbar>
      </AppBar>

      <Sidebar drawerOpen={openSidebar} drawerToggle={toggleSidebar} />

      <Main theme={theme} open={openSidebar}>
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
              {/* TODO: Add context for manage app config */}
              <SettingsDrawer open={false} onClose={() => {}} />

              {children}
            </Box>
          </Box>
        </Box>
      </Main>
    </Box>
  );
};
