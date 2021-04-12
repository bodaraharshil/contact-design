import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Contact from "./component/contact/Contact";
import MainForm from "./component/contact/Form/MainForm";

const Routing = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Contact />
        </Route>
        <Route exact path="/contact">
          <MainForm />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
