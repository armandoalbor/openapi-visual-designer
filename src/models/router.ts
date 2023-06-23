import { FunctionComponent } from "react";

interface Meta {
  name: string;
  content: string;
}

export interface NavigationMetadata {
  [key: string]: Meta[];
}

export interface SimpleRoute {
  layout: JSX.Element | FunctionComponent;
  component: JSX.Element | FunctionComponent;
  titleMessage: string;
}

export interface Route extends SimpleRoute {
  path: string;
  exact: boolean;
  private: boolean;
}
