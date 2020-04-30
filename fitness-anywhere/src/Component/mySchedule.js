import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { data } from '../Data/lorem'

export const MySchedule = () =>
{
  console.log("data", data)
  return (<div>
    {data.map(item => (
      <div class='card'>
        <div class="item">{item.name}</div>
        <div class="item">{item.type}</div>
        <div class="item">{item.startTime}</div>
        <div class="item">{item.duration}</div>
        <div class="item">{item.intensityLevel}</div>
        <div class="item">{item.location}</div>
        <div class="item">Attendees: {item.attendees}</div>
        <div class="item">{item.size}</div>

      </div>

    ))}
  </div>
  )
}