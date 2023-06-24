import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { useUI } from "@/context";
import { DesignerTabs } from "@/models/designer";
import { TabItem, Tabs } from "@/components/ui";
import { GeneralMenu } from "./General";
import { KeyboardArrowLeft, Menu } from "@mui/icons-material";

export const TabsSection = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { selectedDesignerTab, designerTabsIsOpen, actions } = useUI();

  const onChangeTab = (tab: string) => {
    actions?.selectDesignerTab(tab);
    history.push(`${path}/${tab}`);
  };

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
      <Box display="flex" alignItems="center">
        <Tabs
          items={DESIGNER_TABS}
          value={selectedDesignerTab}
          onChange={onChangeTab}
        />

        <IconButton onClick={actions?.toggleDesignerTabs} sx={{ ml: 1, p: 1 }}>
          {designerTabsIsOpen ? (
            <KeyboardArrowLeft />
          ) : (
            <Menu color="secondary" />
          )}
        </IconButton>
      </Box>

      <Box sx={{ display: designerTabsIsOpen ? "flex" : "none" }} p={0}>
        <Switch>
          <Route path={`${path}/general`}>
            <GeneralMenu />
          </Route>
          <Route path={`${path}/paths`}>{selectedDesignerTab}</Route>
          <Route path={`${path}/components`}>{selectedDesignerTab}</Route>
        </Switch>
      </Box>
    </>
  );
};
