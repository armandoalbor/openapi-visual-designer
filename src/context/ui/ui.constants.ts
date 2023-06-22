import { createAction } from "@/utils";

export enum Types {
  SET_SELECTED_DESIGNER_TAB = "ui/setDesignerTab",
  SET_SIDE_BAR_IS_OPEN = "ui/setSideBarIsOpen",
  SET_SETTINGS_BAR_IS_OPEN = "ui/setSettingsBarIsOpen",
}

export const reducerActions = {
  selectDesignerTab: createAction<Types, string>(
    Types.SET_SELECTED_DESIGNER_TAB
  ),
  toggleSideBar: createAction<Types, boolean>(Types.SET_SIDE_BAR_IS_OPEN),
  toggleSettingsBar: createAction<Types, boolean>(
    Types.SET_SETTINGS_BAR_IS_OPEN
  ),
};
