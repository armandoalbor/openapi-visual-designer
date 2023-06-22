import { useUI } from "@/context";
import { DesignerTabs } from "@/models/designer";
import { TabItem, Tabs } from "@/components/ui";
import { Box, Typography } from "@mui/material";

export const SectionTabs = () => {
  const { selectedDesignerTab, actions } = useUI();

  const DESIGNER_TABS: TabItem[] = [
    {
      value: DesignerTabs.GENERAL,
      label: "General",
    },
    {
      value: DesignerTabs.PATHS,
      label: "Paths",
    },
    {
      value: DesignerTabs.COMPONENTS,
      label: "Components",
    },
  ];

  return (
    <>
      <Tabs
        items={DESIGNER_TABS}
        value={selectedDesignerTab}
        onChange={actions?.selectDesignerTab}
      />

      <Box display="flex" p={2}>
        <Typography variant="h2" textTransform="capitalize">
          {selectedDesignerTab}
        </Typography>
      </Box>
    </>
  );
};
