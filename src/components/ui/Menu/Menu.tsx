import { FC, useState, MouseEvent } from "react";
import { Button, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { hexToRgba } from "@/themes/helpers";

interface MenuItem {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
  isActive: boolean;
}

interface Props {
  label: string;
  items: MenuItem[];
  autoInitialize?: boolean;
  variant?: "text" | "contained" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const BasicMenu: FC<Props> = ({
  label,
  items,
  startIcon,
  endIcon,
  variant = "text",
  autoInitialize,
}) => {
  const theme = useTheme();
  const [firstItem] = items;
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(
    autoInitialize ? firstItem : null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        onClick={handleClick}
        variant={variant}
      >
        {startIcon}

        <Typography textTransform="capitalize" display="flex">
          {selectedItem?.icon}
          {selectedItem ? selectedItem.text : label}
        </Typography>

        {endIcon ? (
          endIcon
        ) : (
          <KeyboardArrowDown fontSize="small" sx={{ ml: 1 }} />
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item) => (
          <MenuItem
            sx={{
              backgroundColor: item.isActive
                ? hexToRgba(theme.palette.secondary.light, 0.2)
                : undefined,
            }}
            key={item.text}
            onClick={() => {
              setSelectedItem(item);

              handleClose();
              item.onClick();
            }}
          >
            {item.icon} {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
