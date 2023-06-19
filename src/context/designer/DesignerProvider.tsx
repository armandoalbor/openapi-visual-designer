import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from "react";
import { useActions } from "./designer.actions";
import { DesignerContext, reducer, initialState } from "./designer.context";
import { ContextType } from "./designer.types";

interface Props extends PropsWithChildren {}

export const DesignerProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    actions.onSelectTab(localStorage.getItem("designerTab") || "");
  }, []);

  const contextValue = useMemo<ContextType>(
    () => ({ ...state, actions }),
    [state, actions]
  );

  return (
    <DesignerContext.Provider value={contextValue}>
      {children}
    </DesignerContext.Provider>
  );
};
