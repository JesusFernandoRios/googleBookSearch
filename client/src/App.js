import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css";
import Header from "./component/Header";
import SavedBooks from "./component/SavedBooks";

function App() {
  
    return (
      <Router>
        <Switch>
          <Route path="/">
          <Header/>
          <SavedBooks/>
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
