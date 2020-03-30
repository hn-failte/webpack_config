import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/one" component={One} />
        <Route exact path="/two" component={Two} />
        <Redirect from="**" to="one" />
      </Switch>
    </Router>
  );
};
