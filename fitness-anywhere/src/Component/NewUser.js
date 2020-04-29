import React from 'react'
import {axiosWithAuth} from '../Utils/axiosWithAuth'



export const NewUser = () =>
{
  const [creds, setCreds] = React.useState({ name: "", password: "", instructor:false })

  const handleClick = (e) =>
  {
    e.preventDefault()


    axiosWithAuth
    .post('/api/auth/client_register')
  }

  const onChange = (e) =>
  {
    setCreds({ ...creds, [e.target.name]: e.target.value })
    console.log('state', creds)
  }


  return (
    <div>

      <h1>Hello, please register as a user or an instructor</h1>


      <form action="">
        <input onChange={onChange} type="text" label="name" name="name" placeholder="username" value={creds.name} />
        <input onChange={onChange} type="password" label="password" name="password" placeholder="Enter your password" value={creds.password} />
        <label htmlFor="instructor">Instructor</label>

        <input type="checkbox" value={creds.instructor} onChange={onChange}/>
        <br />
        <button onClick={handleClick} name='instructor'>Enter</button>

      </form>




    </div>
  )
}