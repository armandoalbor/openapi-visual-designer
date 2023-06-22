import { FC, PropsWithChildren, useMemo, useReducer } from "react";
import { UIContext, reducer, initialState } from "./ui.context";
import { useActions } from "./ui.actions";
import { ContextType } from "./ui.types";

interface Props extends PropsWithChildren {}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(
    () => ({ ...state, actions }),
    [state, actions]
  );

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};
