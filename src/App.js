import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

import { Redirect, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Switch>
         <Route path={"/"} exact><Redirect to={"/home"}/>hhhh</Route>
        <Route path={"/home"}><Home/></Route>
        <Route path={"/Projects"}><Projects/></Route>
        <Route path={"/About"}><About/></Route>
        <Route path={"/Contact"}><Contact/></Route>
        <Route path={"*"}><Redirect to={"/home"}/></Route>
      </Switch>
    </div>
  );
};

export default App;
