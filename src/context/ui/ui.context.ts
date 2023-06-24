import { Context, createContext } from "react";
import { Action } from "@/utils";
import { State, ContextType } from "./ui.types";
import { Types } from "./ui.constants";

export const initialState: State = {
  sideBarIsOpen: localStorage.getItem("sideBarIsOpen") === "true",
  settingsBarIsOpen: localStorage.getItem("settingsBarIsOpen") === "true",
  designerTabsIsOpen: localStorage.getItem("designerTabsIsOpen") === "true",
  selectedDesignerTab: localStorage.getItem("designerTab") || "",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_SELECTED_DESIGNER_TAB:
      return { ...state, selectedDesignerTab: action.payload };
    case Types.SET_SIDE_BAR_IS_OPEN:
      return { ...state, sideBarIsOpen: action.payload };
    case Types.SET_DESIGNER_TABS_IS_OPEN:
      return { ...state, designerTabsIsOpen: action.payload };
    case Types.SET_SETTINGS_BAR_IS_OPEN:
      return { ...state, settingsBarIsOpen: action.payload };
    default:
      return state;
  }
};

export const UIContext: Context<ContextType> = createContext(initialState);
