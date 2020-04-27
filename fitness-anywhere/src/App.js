import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Form from './Component/form'

function App() {
  return (
    <div className="App">
      Hello World!
      <nav>
      <Link to="/">
      Home
      </Link>
      <Link to="/login">
      Login
      </Link>
      <Link to="/signup">
      Sign Up
      </Link>
      <Link to="/myschedule">
      My Schedule
      </Link>
      <Link to="/clientschedule">
      Client Schedule
      </Link>
      <Route exact path ='/signup'>
        <Form></Form>
      </Route>
      </nav>
    </div>
  );
}

export default App;
