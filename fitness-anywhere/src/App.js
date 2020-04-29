import React from 'react';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom'
import Form from './Component/form'
import { Searchbar } from './Component/Searchbar'
import { Login } from './Component/login'
import { MySchedule } from './Component/mySchedule'
import { NewUser } from './Component/NewUser'
import { InstructorLogin } from './Component/InstructorLogin';
import { Classes } from './Component/Classes';

function App()
{
  return (

    <div className="App">
      <div className="bg"></div>
      <nav>
        <NavLink to="/">
          Home
      </NavLink>
        <Link to="/login">
          Login
      </Link>
        <Link to="/signup">
          Add Class
      </Link>
      <Link to="/classes">
          Classes
      </Link>
        <Link to="/myschedule">
          My Schedule
      </Link>
        <Link to="/clientschedule">
          Client Schedule
      </Link>
      <Link to="/instructorlogin">
          Instructor Login
      </Link>
      </nav>

      <Searchbar></Searchbar>

      <Route exact path='/signup'>
        <Form></Form>
      </Route>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/classes'>
        <Classes></Classes>
      </Route>
      <Route exact path='/myschedule'>
        <MySchedule />
      </Route>
      <Route exact path='/newuser'>
        <NewUser />
      </Route>
      <Route exact path='/instructorlogin'>
        <InstructorLogin/>
      </Route>
    </div>
  );
}

export default App;
