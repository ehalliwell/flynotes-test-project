import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from './components/SignIn'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/treatments">
            <Treaments />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Appointments() {
  return <h2>Appointments</h2>;
}

function Treaments() {
  return <h2>Treaments</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}