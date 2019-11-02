import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation'
import Home from './pages/Home'
import SingleItem from './pages/SingleItem'


function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/item/:id">
            <SingleItem />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
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