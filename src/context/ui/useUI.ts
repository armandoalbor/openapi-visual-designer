import { useContext } from "react";
import { UIContext } from "./ui.context";

export const useUI = () => useContext(UIContext);
