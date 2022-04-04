import React from "react";
import Cuisine from "./Cuisine";
import Home from "./Home";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/cuisine" component={<Cuisine />} />
      </Routes>
    </div>
  );
};

export default Pages;
