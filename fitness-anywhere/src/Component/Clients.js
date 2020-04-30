import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

export const Clients = () =>
{

  const [clients, setClients] = React.useState([])
  React.useEffect(() =>
  {
    axiosWithAuth()
      .get('/api/client')
      .then(res =>{
        console.log(res.data)
        setClients(res.data)
      })
  }, [])

  return (
    <div>
    <h1>Clients</h1>
      {clients.map(client=>(
        <div>{client.username}</div>
      ))}

    </div>
  )

}