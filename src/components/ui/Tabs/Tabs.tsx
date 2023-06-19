import { SyntheticEvent, FC } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";

export interface TabItem {
  value: string;
  label: string;
}

interface Props {
  items: TabItem[];
  value?: string;
  onChange?: (tabValue: string) => void;
}

export const Tabs: FC<Props> = ({ items, value, onChange }) => {
  const [firstTab] = items;

  // @ts-ignore
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    onChange && onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value || firstTab.value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="tabs-component"
      >
        {items.map((item, index) => (
          <Tab
            key={`tab-${index}-${item.value}`}
            value={item.value}
            label={item.label}
          />
        ))}
      </MuiTabs>
    </Box>
  );
};
