export interface State {
  sideBarIsOpen: boolean;
  settingsBarIsOpen: boolean;
  selectedDesignerTab: string;
}

export interface Actions {
  toggleSideBar: () => void;
  toggleSettingsBar: () => void;
  selectDesignerTab: (tab: string) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
