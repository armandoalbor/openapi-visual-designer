import { FC } from "react";
import { Avatar, Box, ButtonBase, Typography, useTheme } from "@mui/material";
import {
  ChevronLeftOutlined,
  KeyboardBackspace,
  Menu,
} from "@mui/icons-material";
import { Sizes } from "@/models";
import { Logo } from "./Logo";
import { ProfileButton } from "../ProfileButton";
import { useUI } from "@/context";

interface Props {}

export const Header: FC<Props> = () => {
  const theme = useTheme();
  const { sideBarIsOpen, actions } = useUI();

  return (
    <Box
      height={Sizes.APPBAR_HEIGHT}
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 268,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <Logo />
        </Box>

        <ButtonBase sx={{ overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: "all .2s ease-in-out",
              background: theme.palette.secondary.main,
              borderRadius: 2,
              "&:hover": {
                background: theme.palette.secondary.dark,
              },
            }}
            onClick={actions?.toggleSideBar}
            color="inherit"
          >
            {sideBarIsOpen ? (
              <ChevronLeftOutlined color="inherit" />
            ) : (
              <Menu color="inherit" />
            )}
          </Avatar>
        </ButtonBase>
      </Box>

      <ProfileButton />
    </Box>
  );
};
