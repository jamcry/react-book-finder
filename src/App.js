import React from "react";
import BookFinder from "./BookFinder";
import Header from "./Header";
import "./App.css";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="mt-5 pt-2">
          <Switch>
            <Route path="/" exact component={BookFinder} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
