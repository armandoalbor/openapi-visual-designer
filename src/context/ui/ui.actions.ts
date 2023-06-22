import { Actions, State } from "./ui.types";
import { reducerActions } from "./ui.constants";

const useActions = (state: State, dispatch: any): Actions => {
  const selectDesignerTab = (tab: string): void => {
    dispatch(reducerActions.selectDesignerTab(tab));
    localStorage.setItem("designerTab", tab.toString());
  };

  const toggleSideBar = (): void => {
    const isOpen = !state.sideBarIsOpen;

    dispatch(reducerActions.toggleSideBar(isOpen));
    localStorage.setItem("sideBarIsOpen", isOpen.toString());
  };

  const toggleSettingsBar = (): void => {
    const isOpen = !state.settingsBarIsOpen;

    dispatch(reducerActions.toggleSettingsBar(isOpen));
    localStorage.setItem("settingsBarIsOpen", isOpen.toString());
  };

  return {
    selectDesignerTab,
    toggleSettingsBar,
    toggleSideBar,
  };
};

export { useActions };
