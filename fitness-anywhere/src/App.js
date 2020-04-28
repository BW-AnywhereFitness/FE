import React from 'react';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom'
import Form from './Component/form'
import {Searchbar} from './Component/Searchbar'
import {Login} from './Component/login'

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

      <Searchbar></Searchbar>

      <Route exact path ='/signup'>
        <Form></Form>
      </Route>
      <Route exact path ='/login'>
        <Login></Login>
      </Route>
     
    </div>
  );
}

export default App;
