import { LoggingScreen } from "containers/LoggingScreen";
import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Switch } from "react-router-dom";

// import AuthRoute from "./components/routes/AuthRoute";
// import PrivateRoute from "./components/routes/PrivateRoute";
import Providers from "./Providers";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Providers history={history}>
      <Switch>
        {/* <AuthRoute exact component={LoginPage} path="/login" />
        <PrivateRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          breadcrumbs={[
            { translationId: "HEADER.DASHBOARD", pathname: "/dashboard" },
          ]}
          // requiredPermissions={[]}
        /> */}
        <LoggingScreen />

        <Redirect to="/dashboard" />
      </Switch>
    </Providers>
  );
}
