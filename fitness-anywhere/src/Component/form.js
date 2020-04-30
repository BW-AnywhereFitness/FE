import React, { useState, useEffect } from 'react';
import '../App.css'
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import * as yup from 'yup';
//import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .required('Please enter your name'),
    type: yup
        .string(),
    start_time: yup
        .string(),
    duration: yup
        .string(),
    intensity: yup
        .number(),
    location: yup
        .string(),
    max_size: yup
        .string(),
    id: yup
        .number(),
    instructor_id: yup
    .number()
})


function Form()
{
    const initialFormValues = {
        id: 0,
        instructor_id: 0,
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: 0,
        location: "",
        register_attendees: "",
        max_size: 0,
    }


    const [errors, setErrors] = useState({
        id: '',
        instructor_id: '',
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: '',
        location: "",
        register_attendees: "",
        max_size: '',
    });

    const [values, setValues] = useState(initialFormValues)

    function onInputChange(e)
    {
        e.persist()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log("Event from onChange", e)
        validateChange(e)
        //console.log("event target name", [event.target.name], event.target.value)
        // console.log("values", values)
    }
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() =>
    {
        formSchema.isValid(values).then(valid =>
        {
            setButtonDisabled(!valid);
        });

    }, [values]);

    const validateChange = e =>
    {
        console.log("E from validate", [e.target.name])
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid =>
            {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                });

            })
            .catch(err =>
            {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    }

    const onSubmit = (e) =>
    {
        e.preventDefault()
        console.log(values)
        axiosWithAuth()
            .post(`/api/class/${values.id}/`, values)
            .then(res =>
            {
                console.log("response from add", res)
                setValues(initialFormValues)
            })
            .catch("You caught me")
    }

    return (
        <form>
            <h2>Anywhere Fitness</h2>

            <label>
                Class Id:&nbsp;
                <input
                    name='id'
                    value={values.id}
                    onChange={onInputChange}
                />
            </label>
            <label>
                Name:&nbsp;
                <input
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
            </label>

            <label>
                Instructor ID:&nbsp;
                <input
                    name='instructor_id'
                    value={values.instructor_id}
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
                    name='start_time'
                    value={values.start_time}
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
                    name='intensity'
                    value={values.intensity}
                    onChange={onInputChange}
                >
                    <option>Select Intensity</option>
                    <option value={1}>Low</option>
                    <option value={2}>Moderate</option>
                    <option value='3'>Vigorous</option>
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
                    name='max_size'
                    value={values.max_size}
                    onChange={onInputChange}
                >
                    <option>Select Class Size</option>
                    <option value={4}>Small (1-4)</option>
                    <option value={15}>Medium (5-15)</option>
                    <option value={20}>Large (16+)</option>
                </select>
            </label>

            <button className='submit' onClick={onSubmit}>Submit</button>
        </form>
    );
}

export default Form;