import React from 'react';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom'
import Form from './Component/form'

function App() {
  return (
    
    <div className="App">
      <div class="bg"></div>
      <nav>
      <NavLink to="/">
      Home
      </NavLink>
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
      </nav>
      <Route exact path ='/signup'>
        <Form></Form>
      </Route>
     
    </div>
  );
}

export default App;
