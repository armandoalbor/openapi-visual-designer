import { createAction } from "@/utils";

export enum Types {
  SET_SELECTED_TAB = "designer/setDesigner",
}

export const reducerActions = {
  selectTab: createAction<Types, string>(Types.SET_SELECTED_TAB),
};
