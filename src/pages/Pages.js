import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "../components/Category";
import Cuisine from "./Cuisine";
import Home from "./Home";

const Pages = () => {
  return (
    <div>
      <Category />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cuisine/:type">
          <Cuisine />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
