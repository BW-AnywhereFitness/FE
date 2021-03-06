import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { Route, Link, NavLink } from 'react-router-dom'


export const Login = (props) =>
{
  const [creds, setCreds] = React.useState({ name: "", password: "" })

  const handleClick = (e) =>
  {
    e.preventDefault()
    const credObj = { "username": creds.name, "password": creds.password }
    axiosWithAuth()
      .post("/api/auth/client_login", credObj)
      .then(res =>
      {
        console.log(res)
        localStorage.setItem("token",res.data.token)
        alert("you're logged in")
        // props.history.push('/classes')
      })
  }
  const onChange = (e) =>
  {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  return (
    <div className="component-parent login">
      <br />
      Hello. Please log in to access your current information.
      <br />
      <br />
      <form action="">
        <input onChange={onChange} type="text" label="name" name="name" placeholder="username or email" value={creds.name} />
        <input onChange={onChange} type="password" label="password" name="password" placeholder="Enter your password" value={creds.password} />
        <br />
        <button onClick={handleClick}>Enter</button>
        <br />
        <Link to="/newuser">New User? Register here</Link>
        <br />
        <Link to="/forgotpassword">Oops I forgot my password</Link>

      </form>
    </div>
  )
}