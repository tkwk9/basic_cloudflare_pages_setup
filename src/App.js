import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

const NavBar = () => (
  <div className="NavBar">
    <Link to={`/`}>Home</Link>
    <Link to={`/xyz`}>XYZ</Link>
  </div>
);

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/">
          <span className="Content-text">{"Hello World :)"}</span>
        </Route>
        <Route exact path="/xyz">
          <span className="Content-text">{"XYZ"}</span>
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Content />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
