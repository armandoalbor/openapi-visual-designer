export interface State {
  selectedTab: string;
}

export interface Actions {
  onSelectTab: (tab: string) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
