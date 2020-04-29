import React, { useState, useEffect } from 'react';
import '../App.css'
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .required('Please enter your name'),
    email: yup
        .string()
        .email()
        .required('Please enter your email'),
    type: yup
        .string(),
    startTime: yup
        .string(),
    duration: yup
        .string(),
    level: yup
        .string(),
    location: yup
        .string(),
    size: yup
        .string(),
    terms: yup
        .boolean()
        .oneOf([true], 'Please accept these terms'),

})

export default function Form() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        type: "",
        startTime: "",
        duration: "",
        level: "",
        location: "",
        size: "",
        terms:""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        type: "",
        startTime: "",
        duration: "",
        level: "",
        location: "",
        size: "",
        terms:""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });

    }, [formState]);

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                });

            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    }
    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setUsers(users.concat(res.data));
                console.log("success", users);
                
                setFormState({
                    name: "",
                    email: "",
                    type: "",
                    startTime: "",
                    duration: "",
                    level: "",
                    location: "",
                    size: "",
                    terms:"",
                });
            })
            .catch(err => console.log(err.res));
    };
const onInputChange = e => {
    e.persist();
    const newFormData = {
        ...formState,
        [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checkbox :
        e.target.value
    };
    validateChange(e);
    setFormState(newFormData)
};
    return (
        <form onSubmit={formSubmit}>
            <h2>Anywhere Fitness</h2>

            <label>
                Name:&nbsp;
                <input
                    name='name'
                    value={formState.name}
                    onChange={onInputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
            </label>

            <label>
                Email:&nbsp;
                <input
                    name='email'
                    value={formState.email}
                    onChange={onInputChange}
                />
                {errors.email.length > 0 ? (<p className="error"> {errors.email}</p>) : null}
            </label>

            <label>
                Type:&nbsp;
                <select
                    name='type'
                    value={formState.type}
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
                    value={formState.startTime}
                    onChange={onInputChange}
                >
                    <option>Select a Time</option>
                    <option value='morning'>Morning</option>
                    <option value='afternoon'>Afternoon</option>
                    <option value='evening'>Evening</option>
                </select>
            </label>

            <label>
                Duration:&nbsp;
                <select
                    name='duration'
                    value={formState.duration}
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
                    value={formState.level}
                    onChange={onInputChange}
                >
                    <option>Select Intensity</option>
                    <option value='low'>Low</option>
                    <option value='moderate'>Moderate</option>
                    <option value='vigorous'>Vigorous</option>
                </select>
            </label>

            <label>
                Location:&nbsp;
                <select
                    name='location'
                    value={formState.location}
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
                    value={formState.size}
                    onChange={onInputChange}
                >
                    <option>Select Class Size</option>
                    <option value='small'>Small (1-4)</option>
                    <option value='medium'>Medium (5-15)</option>
                    <option value='large'>Large (16+)</option>
                </select>
            </label>
            <label>
                Terms of Service:&nbsp;
                <input
                type='checkbox'
                name='terms'
                checked={formState.terms}
                onChange={onInputChange}/>
            </label>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    );
}

