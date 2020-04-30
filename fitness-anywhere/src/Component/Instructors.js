import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

export const Instructors = () =>
{

  const [instructors, setinstructors] = React.useState([])
  React.useEffect(() =>
  {
    axiosWithAuth()
      .get('/api/instructor')
      .then(res =>{
        console.log(res.data)
        setinstructors(res.data)
      })
  }, [])

  return (
    <div>
    <h1>instructors</h1>
      {instructors.map(instructor=>(
        <div>{instructor.username}</div>
      ))}

    </div>
  )

}