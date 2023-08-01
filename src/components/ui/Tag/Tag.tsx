import { FC } from "react";
import { Chip, ChipProps } from "@mui/material";
import { hexToRgba } from "@/themes";

interface Props extends ChipProps {
  label: string;
  customColor: string;
}

export const Tag: FC<Props> = ({ customColor, label, ...otherProps }) => {
  return (
    <Chip
      label={label}
      sx={{
        m: 0.5,
        backgroundColor: hexToRgba(customColor, 0.1),
        color: customColor,
        border: `1px solid ${customColor}`,
        fontWeight: 500,
      }}
      {...otherProps}
    />
  );
};
