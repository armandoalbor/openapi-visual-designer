import { MainLayout } from "@/layouts";
import { SimpleRoute, Route } from "@/models";
import {
  CodePage,
  DesignerPage,
  HomePage,
  NotFoundPage,
  StyleguidePage,
  ValidatorPage,
} from "@/views";

export const routes: Route[] = [
  {
    path: "/",
    layout: MainLayout,
    component: HomePage,
    exact: true,
    titleMessage: "routes.appName",
    private: false,
  },
  {
    path: "/designer",
    layout: MainLayout,
    component: DesignerPage,
    exact: false,
    titleMessage: "routes.appName",
    private: false,
  },
  {
    path: "/code",
    layout: MainLayout,
    component: CodePage,
    exact: true,
    titleMessage: "routes.code",
    private: false,
  },
  {
    path: "/validator",
    layout: MainLayout,
    component: ValidatorPage,
    exact: true,
    titleMessage: "routes.validator",
    private: false,
  },
  {
    path: "/dev/styleguide",
    layout: MainLayout,
    component: StyleguidePage,
    exact: true,
    titleMessage: "routes.styleguide",
    private: false,
  },
];

export const errorPageRoute: SimpleRoute = {
  layout: MainLayout,
  component: NotFoundPage,
  titleMessage: "routes.404",
};
