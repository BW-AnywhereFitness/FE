import React, { useState, useEffect } from 'react';
import '../App.css'
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import * as yup from 'yup';


/// NOTE TO REVIEWERS, I MADE THIS FORM LAST MINUTE CLONED FROM FORM REACT 1 PRIMARILY MADE. USED IT AS AN AD HOC FORM TO IMPART (FITNESS) CLASS EDIT FUNCTIONALITY. WAS JUST SENDING PUT REQUEST WTIH IDENTICAL DATA, I.E. OVERWRITING WITH SAME. NEEDED SOME KIND OF FORM AND SIMPLE STATE MGMT. GOT IT WORKING ALTHOUGH CAN STILL IMPROVE UX AND STATE MGMT AT LEAST IT DOES JOB. 


//import axios from 'axios';

// const formSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(3)
//     .required('Please enter your name'),
//   type: yup
//     .string(),
//   start_time: yup
//     .string(),
//   duration: yup
//     .string(),
//   intensity: yup
//     .number(),
//   location: yup
//     .string(),
//   max_size: yup
//     .string(),
//   id: yup
//     .number()
//     .min(1)
//     .required("Please enter an id"),
//   instructor_id: yup
//     .number()
// })


function FormGeneric(props)
{
  const initialFormValues = {
    id: "",
    instructor_id: "",
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity: 0,
    location: "",
    register_attendees: "",
    max_size: 0,
  }


  // const [errors, setErrors] = useState({
  //   id: '',
  //   instructor_id: '',
  //   name: "",
  //   type: "",
  //   start_time: "",
  //   duration: "",
  //   intensity: '',
  //   location: "",
  //   register_attendees: "",
  //   max_size: '',
  // });


  function onInputChange(e)
  {
    e.persist()
    props.setValues({
      ...props.values,
      [e.target.name]: e.target.value
    })
    // validateChange(e) // turning this off turns off a lot of this code but it's ok for this usage (edit class in classes) 
    console.log("Values", props.values)


  }
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // useEffect(() =>
  // {
  //   formSchema.isValid(values).then(valid =>
  //   {
  //     setButtonDisabled(!valid);
  //   });

  // }, [values]);

  // const validateChange = e =>
  // {
  //   yup
  //     .reach(formSchema, e.target.name)
  //     .validate(e.target.value)
  //     .then(valid =>
  //     {
  //       setErrors({
  //         ...errors,
  //         [e.target.name]: ''
  //       });

  //     })
  //     .catch(err =>
  //     {
  //       setErrors({
  //         ...errors,
  //         [e.target.name]: err.errors[0]
  //       });
  //     });
  // }

  // const onSubmit = (e) =>
  // {
  //     e.preventDefault()
  //     console.log(values)
  //     axiosWithAuth()
  //         .post(`/api/class/${values.id}/`, values)
  //         .then(res =>
  //         {
  //             console.log("response from add", res)
  //             setValues({...values, id:values.id++})
  //         })
  //         .catch("You caught me")
  // }

  return (
    <form>

      <label>
        Class Id:&nbsp;
                <input
          name='id'
          value={props.values.id}
          onChange={onInputChange}
        />

      </label>
      <label>
        Class Name:&nbsp;
                <input
          name='name'
          value={props.values.name}
          onChange={onInputChange}
        />
      </label>

      <label>
        Instructor ID:&nbsp;
                <input
          name='instructor_id'
          value={props.values.instructor_id}
          onChange={onInputChange}
        />
      </label>

      <label>
        Type:&nbsp;
                <select
          name='type'
          value={props.values.type}
          onChange={onInputChange}
        >
          <option>Select a Workout Type</option>
          <option value='yoga'>Yoga</option>
          <option value='pilates'>Pilates</option>
          <option value='running'>Running</option>
          <option value='boxing'>Boxing</option>
          <option value='weightlifting'>Weightlifting</option>
          <option value='dancing'>Dancing</option>
        </select>
      </label>
      <label>
        Start Time:&nbsp;
                <select
          name='start_time'
          value={props.values.start_time}
          onChange={onInputChange}
        >
          <option>Select a Time</option>
          <option value='Morning'>Morning</option>
          <option value='Afternoon'>Afternoon</option>
          <option value='Evening'>Evening</option>
        </select>
      </label>

      <label>
        Duration:&nbsp;
                <select
          name='duration'
          value={props.values.duration}
          onChange={onInputChange}
        >
          <option>Select a Duration</option>
          <option value='fifteen'>15 Minutes</option>
          <option value='thirty'>30 Minutes</option>
          <option value='fortyfive'>45 Minutes</option>
        </select>
      </label>

      <label>
        Intensity Level:&nbsp;
                <select
          name='intensity'
          value={props.values.intensity}
          onChange={onInputChange}
        >
          <option>Select Intensity</option>
          <option value={1}>Low</option>
          <option value={2}>Moderate</option>
          <option value={3}>Vigorous</option>
        </select>
      </label>

      <label>
        Location:&nbsp;
                <select
          name='location'
          value={props.values.location}
          onChange={onInputChange}
        >
          <option>Select Location</option>
          <option value='anderonsville'>Andersonville</option>
          <option value='edgewater'>Edgewater</option>
          <option value='rogersPark'>Rogers Park</option>
          <option value='lakeview'>Lakeview</option>
          <option value='lincolnPark'>Lincoln Park</option>
          <option value='goldcoast'>Goldcoast</option>
        </select>
      </label>

      <label>
        Class Size:&nbsp;
                <select
          name='max_size'
          value={props.values.max_size}
          onChange={onInputChange}
        >
          <option>Select Class Size</option>
          <option value={4}>Small (1-4)</option>
          <option value={15}>Medium (5-15)</option>
          <option value={20}>Large (16+)</option>
        </select>
      </label>
      <br />
      <hr />
      {/* <button className='submit' onClick={onSubmit}>Submit</button> */}
    </form>
  );
}

export default FormGeneric;