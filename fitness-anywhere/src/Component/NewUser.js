import React from 'react'
import axios from 'axios'

export const NewUser = () =>
{


  const [creds, setCreds] = React.useState({ name: "", password: "" })

  const handleClick = (e) =>
  {
    e.preventDefault()
  }

  const onChange = (e) =>
  {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }


  return (
    <div>

      <h1>Hello, please register as a user or an instructor</h1>


      <form action="">
        <input onChange={onChange} type="text" label="name" name="name" placeholder="username" value={creds.name} />
        <input onChange={onChange} type="password" label="password" name="password" placeholder="Enter your password" value={creds.password} />
        <br />
        <button onClick={handleClick}>Enter</button>

      </form>




    </div>
  )
}