import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DetailsForm } from "./DetailsForm";
import { Box } from "@mui/material";
import { hexToRgba } from "@/themes";

export const MainSection = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/general`}>
          Main
        </Route>
        <Route exact path={`${path}/general/details`}>
          <DetailsForm />
        </Route>
      </Switch>
    </>
  );
};
