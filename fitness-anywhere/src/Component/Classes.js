import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { data } from '../Data/lorem'

export const Classes = () =>
{
  
  const [classes,setClasses] = React.useState([])
  useEffect(()=>{
    axiosWithAuth()
    .get("/api/class")
    .then(res =>{
      setClasses(res.data)
      console.log("classes", res.data)
    })
    .catch("not getting properly")
  },[])


  // console.log("data", data)
  return (<div>
    {classes.map(item => (
      <div class='card'>
        <div class="item">Class Id: {item.id}</div>
        <div class="item">Class Instructor: {item.instructor_id}</div>
        <div class="item">Class Name: {item.name}</div>
        <div class="item">Class Type: {item.type}</div>
        <div class="item">Start Time: {item.start_time}</div>
        <div class="item">Length: {item.duration}</div>
        <div class="item">Level: {item.intensity}</div>
        <div class="item">Location: {item.location}</div>
        <div class="item">Attendees: {item.registered_attendees}</div>
        <div class="item">Max Size: {item.max_size}</div>
      </div>

    ))}
        Where classes will go from API

  </div>
  )
}