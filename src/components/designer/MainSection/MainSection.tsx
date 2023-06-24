import { Switch, Route, useRouteMatch } from "react-router-dom";

export const MainSection = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/general`}>
          Main
        </Route>
        <Route exact path={`${path}/general/details`}>
          API Details
        </Route>
      </Switch>
    </>
  );
};
