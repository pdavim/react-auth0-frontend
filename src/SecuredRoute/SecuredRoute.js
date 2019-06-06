import React from "react";
import { Route } from "react-router-dom";
import auth0Client from "../Auth/Auth";
import auth from "../routes";

function SecuredRoute(props) {
  const { component: Component, path } = props;

  return (
    <Route
      path={path}
      render={() => {
        if (!auth0Client.isAuthenticaded()) {
          auth0Client.login();
          return <div />;
        }
        return <Component />;
      }}
    />
  );
}

export default SecuredRoute;
