import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DetailsForm } from "./DetailsForm";
import { Tags } from "./Tags";
import { Servers } from "./Servers";

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
        <Route exact path={`${path}/general/tags`}>
          <Tags />
        </Route>
        <Route exact path={`${path}/general/servers`}>
          <Servers />
        </Route>
      </Switch>
    </>
  );
};
