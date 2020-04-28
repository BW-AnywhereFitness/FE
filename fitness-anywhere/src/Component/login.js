import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';


export const Login = () =>
{
  const [creds, setCreds] = React.useState({})

const handleClick = (e) =>{
  e.preventDefault()
}

const onChange = () =>{

}

  return (
    <div className="component-parent">
      <br/>
      Hello. Please log in to access your current information.
      <br/>
      <br/>
      <form action="">
      <input type="text" label="name" name="name" placeholder="username or email"/>
      <input type="password" label="password" name="password" placeholder="Enter your password"/>
      <br/>
      <button onClick={handleClick}>Enter</button>
      
      </form>
    </div>
    )
}