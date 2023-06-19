import { Actions, State } from "./designer.types";
import { reducerActions } from "./designer.constants";

const useActions = (state: State, dispatch: any): Actions => {
  const onSelectTab = (tab: string): void => {
    dispatch(reducerActions.selectTab(tab));
    localStorage.setItem("designerTab", tab.toString());
  };

  return {
    onSelectTab,
  };
};

export { useActions };
