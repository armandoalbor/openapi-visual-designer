export interface State {
  sideBarIsOpen: boolean;
  settingsBarIsOpen: boolean;
  selectedDesignerTab: string;
  designerTabsIsOpen: boolean;
}

export interface Actions {
  toggleSideBar: () => void;
  toggleSettingsBar: () => void;
  toggleDesignerTabs: () => void;
  selectDesignerTab: (tab: string) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
