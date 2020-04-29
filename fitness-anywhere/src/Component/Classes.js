import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { data } from '../Data/lorem'

export const Classes = () =>
{
  
  const [classes, setClasses] = React.useState([])
  useEffect(() =>
  {
    axiosWithAuth()
    .get("/api/class")
    .then(res =>
      {
        setClasses(res.data)
        console.log("classes", res.data)
      })
      .catch("not getting properly")
    }, [])
    
    const edit = (item) =>
    {
      axiosWithAuth()
        .put(`api/class/${item.id}`, item)
        .then(res =>{
          console.log(res)
        })
        .catch("")
    }
    const deleteMe = (item) =>
    {
      // e.preventDefault()
      axiosWithAuth()
        .delete(`api/class/${item.id}`, item)
        .then(res =>{
          console.log(res)
        })
        .catch("")
    }
  
  // console.log("data", data)
  return (<div>
    {classes.map(item => (
      <div key={item.id} className='card'>
        <div className="item">Class Id: {item.id}</div>
        <div className="item">Class Instructor: {item.instructor_id}</div>
        <div className="item">Class Name: {item.name}</div>
        <div className="item">Class Type: {item.type}</div>
        <div className="item">Start Time: {item.start_time}</div>
        <div className="item">Length: {item.duration}</div>
        <div className="item">Level: {item.intensity}</div>
        <div className="item">Location: {item.location}</div>
        <div className="item">Attendees: {item.registered_attendees}</div>
        <div className="item">Max Size: {item.max_size}</div>
        <button onClick={()=>deleteMe(item)} > Delete</button>
        <button onClick={()=>edit(item)} >Edit</button>
      </div>

))}
        Loading

  </div>
  )
}