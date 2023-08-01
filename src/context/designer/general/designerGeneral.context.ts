import { Context, createContext } from "react";
import { Action } from "@/utils";
import { State, ContextType } from "./designerGeneral.types";
import { Types } from "./designerGeneral.constants";

const savedState = JSON.parse(localStorage.getItem("general") || "");

export const initialState: State = {
  isLoading: false,
  tags: savedState.tags || {
    list: [],
    filteredList: [],
    searchTerm: "",
  },
  servers: savedState.servers || {
    list: [],
    filteredList: [],
    searchTerm: "",
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_TAGS:
      return {
        ...state,
        tags: {
          ...state.tags,
          list: action.payload,
          filteredList: action.payload,
        },
      };
    case Types.SET_FILTERED_TAGS:
      return {
        ...state,
        tags: { ...state.tags, filteredList: action.payload },
      };
    case Types.SET_SEARCH_TAG:
      return {
        ...state,
        tags: { ...state.tags, searchTerm: action.payload },
      };
    case Types.SET_SELECTED_TAG:
      return {
        ...state,
        tags: { ...state.tags, selectedTag: action.payload },
      };

    case Types.SET_SERVERS:
      return {
        ...state,
        servers: {
          ...state.servers,
          list: action.payload,
          filteredList: action.payload,
        },
      };
    case Types.SET_FILTERED_SERVERS:
      return {
        ...state,
        servers: { ...state.servers, filteredList: action.payload },
      };
    case Types.SET_SEARCH_SERVER:
      return {
        ...state,
        servers: { ...state.servers, searchTerm: action.payload },
      };
    case Types.SET_SELECTED_SERVER:
      return {
        ...state,
        servers: { ...state.servers, selectedServer: action.payload },
      };
    default:
      return state;
  }
};

export const DesignerGeneralContext: Context<ContextType> =
  createContext(initialState);
