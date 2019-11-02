import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}