import React, { useState } from 'react';
import '../App.css'
//import * as yup from 'yup';
//import axios from 'axios';

function Form(props) {
    const { onSubmit } = props;

    const formValues = {
        name: "",
        email: "",
        type: "",
        startTime: "",
        duration: "",
        level: "",
        location:"",
        // noRegAttend:"",
        size:"",
    }

    const [values, setValues] = useState(formValues)

    function onInputChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
        //console.log("event target name", [event.target.name], event.target.value)
        console.log("values", values)
    }
    return (
        <form>
            <h2>Anywhere Fitness</h2>

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
                <select
                    name='type'
                    value={values.type}
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
                    <option>Select Intensity</option>
                    <option value='Low'>Low</option>
                    <option value='Moderate'>Moderate</option>
                    <option value='Vigorous'>Vigorous</option>
                </select>
            </label>

            <label>
                Location:&nbsp;
                <select
                    name='location'
                    value={values.location}
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
                    name='size'
                    value={values.size}
                    onChange={onInputChange}
                >
                    <option>Select Class Size</option>
                    <option value='small'>Small (1-4)</option>
                    <option value='medium'>Medium (5-15)</option>
                    <option value='large'>Large (16+)</option>  
                </select>
            </label>

            <button className='submit' onClick={onSubmit}>Submit</button>
        </form>
    );
}

export default Form;