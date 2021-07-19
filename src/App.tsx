import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((item, index) => {
          return (
            <Route
              path={item.path}
              key={index + 1}
              exact={item.exact}
              render={(props) => <item.page {...props} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
