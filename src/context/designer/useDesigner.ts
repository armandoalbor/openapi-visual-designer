import { useContext } from "react";
import { DesignerContext } from "./designer.context";

export const useDesigner = () => useContext(DesignerContext);
