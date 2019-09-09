import React from "react";
import BookFinder from "./BookFinder";
import Header from "./Header";
import "./App.css";
import About from "./About";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <div className="mt-5 pt-2">
          <Switch>
            <Route path="/" exact component={BookFinder} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
