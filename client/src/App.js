import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import store from "./store";
import { Provider } from "react-redux";
import Pog from "./components/Pog";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/pog" component={Pog} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
