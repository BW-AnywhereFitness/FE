import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

function Form(props) {
    const { onSubmit } = props;

const formValues = {
    name:"",
    email:"",
    type:"",
    startTime:"",
    duration:"",
    level: "",
    //location:"",
   // noRegAttend:"",
    //maxClass:"",
}

const [values, setValues] = useState(formValues)

function onInputChange (event){
setValues({
    ...values,
    [event.target.name]:event.target.value})
    //console.log("event target name", [event.target.name], event.target.value)
    console.log("values", values)
}
    return (
        <form>
            <h2>Sign Up</h2>

            <label>
                Name:&nbsp;
                <input
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>

            <label>
                Email:&nbsp;
                <input
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>
            
            <label>
                Type:&nbsp;
                <input
                    name='type'
                    value={values.type}
                    onChange={onInputChange}
                />
            </label>
            <label>
                Start Time:&nbsp;
                <select
                    name='startTime'
                    value={values.startTime}
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
                    value={values.duration}
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
                    name='level'
                    value={values.level}
                    onChange={onInputChange}
                >
                    <option>Select a Role</option>
                    <option value='Low'>Low</option>
                    <option value='Moderate'>Moderate</option>
                    <option value='Vigorous'>Vigorous</option>
                </select>
            </label>

            <button className='submit' onClick={onSubmit}>Submit</button>
        </form>
    );
}

export default Form;