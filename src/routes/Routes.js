import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthRoutes from "./AuthRoutes"


export default function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={AuthRoutes} path="/newsletters" />
      <Route component={NotFound} />
    </Switch>
  );
}
