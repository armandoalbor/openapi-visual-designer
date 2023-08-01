import { FC, PropsWithChildren, useMemo, useReducer, useEffect } from "react";
import { useActions } from "./designerGeneral.actions";
import {
  DesignerGeneralContext,
  reducer,
  initialState,
} from "./designerGeneral.context";
import { ContextType } from "./designerGeneral.types";

interface Props extends PropsWithChildren {}

export const DesignerGeneralProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    localStorage.setItem("general", JSON.stringify(state));
  }, [state]);

  const contextValue = useMemo<ContextType>(
    () => ({ ...state, actions }),
    [state, actions]
  );

  return (
    <DesignerGeneralContext.Provider value={contextValue}>
      {children}
    </DesignerGeneralContext.Provider>
  );
};
