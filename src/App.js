import React from 'react';
import Home from './Components/Home.js';
import Single from './Components/Single.js';
import Admin from './Components/Multiple.js';
import 'antd/dist/antd.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import './App.css';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Single />
          </Route>  
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

    
    
function Manager(){
     let match = useRouteMatch();
    return(
        <div>
        <h1>Types of Managers</h1>
        
        <ul>
            <li><Link to="/manager/Pick-up & Drop-off">Pick-up & Drop-off Managers</Link></li>
            <li><Link to="/manager/Travel">Travel Managers</Link></li>
        </ul>
        
            <Switch>
                <Route path={`${match.path}/station`}>
                  <h3>Pick-up & Drop-off Managers</h3>
                </Route>
                <Route path={`${match.path}/Travel`}>
                  <h3>Travel Managers</h3>
                </Route>
          </Switch>
        
        </div>
    );
}
    