import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import DemoApp from './demo/App';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/demo" component={DemoApp} />
      <Redirect from="/" to="/demo/home" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
