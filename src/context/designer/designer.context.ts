import { Context, createContext } from "react";
import { Action } from "@/utils";
import { State, ContextType } from "./designer.types";
import { Types } from "./designer.constants";

export const initialState: State = {
  selectedTab: "",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_SELECTED_TAB:
      return { ...state, selectedTab: action.payload };
    default:
      return state;
  }
};

export const DesignerContext: Context<ContextType> =
  createContext(initialState);
