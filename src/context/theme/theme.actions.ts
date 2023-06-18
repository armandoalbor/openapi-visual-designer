import { Actions, State } from "./theme.types";
import { reducerActions } from "./theme.constants";
import { darkTheme, lightTheme } from "@/themes";

const useActions = (state: State, dispatch: any): Actions => {
  const onSelectTheme = (theme: string): void => {
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    dispatch(reducerActions.setTheme({ theme, currentTheme }));
    localStorage.setItem("theme", theme);
  };

  return {
    onSelectTheme,
  };
};

export { useActions };
