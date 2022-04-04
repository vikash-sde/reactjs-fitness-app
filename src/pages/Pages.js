import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "../components/Category";
import Search from "../components/Search";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";

const Pages = () => {
  return (
    <div>
      <Search />
      <Category />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cuisine/:type">
          <Cuisine />
        </Route>
        <Route path="/searched/:search">
          <Searched />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
