// @ts-nocheck
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useTranslation } from "@/hooks";
import { routes, errorPageRoute } from "./routes";
import { metas } from "./metas";
// import "./Navigation.scss";

function Navigation() {
  const { t } = useTranslation();

  // TODO: Implement here your auth handler, for example useAuth hook
  const { auth }: any = {};

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          const metadata = metas[route.path] || [];

          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <>
                  <Helmet>
                    <title>{t(route.titleMessage)}</title>
                    {metadata.map((meta) => (
                      <meta key={meta} {...meta} />
                    ))}
                  </Helmet>

                  {route.private ? (
                    auth ? (
                      <route.layout>
                        <route.component {...props} />
                      </route.layout>
                    ) : (
                      <Redirect to="/login" />
                    )
                  ) : (
                    <route.layout>
                      <route.component {...props} />
                    </route.layout>
                  )}
                </>
              )}
            />
          );
        })}

        <Route
          render={(props) => (
            <>
              <Helmet>
                <title>{t(errorPageRoute.titleMessage)}</title>
              </Helmet>
              <errorPageRoute.layout>
                <errorPageRoute.component {...props} />
              </errorPageRoute.layout>
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export { Navigation };
