import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { Searchbar } from '../Component/Searchbar'

export const Classes = () =>
{

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([]) //want to instantiate with props.classes
  const [classes, setClasses] = React.useState([])
  React.useEffect(() =>
  {
    // console.log(classes)
    const results = classes.filter((item) =>

      (item.name.toLowerCase().includes(searchTerm) || item.start_time.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm) || item.duration.toLowerCase().includes(searchTerm) || item.intensity === searchTerm ||item.location.toLowerCase().includes(searchTerm) || item.id === searchTerm)  // this is magic of search
      // item.duration.toLowerCase().includes(searchTerm)

    )
    if (searchTerm !== "")
    {
      setSearchResults(results)
    }
    else
    {
      setSearchResults([])
    }
    console.log("Search Results", results)
  }, [searchTerm])

  const handleChange = (e) =>
  {
    setSearchTerm(e.target.value)
    // console.log("lower case etarget",e.target.value.toLowerCase())

  }

/////


const findSearchObject = function (array, searchTerm2){
  const objReturned = array.find(function(item, index){
    return (item.name === searchTerm2 )
  })
  return objReturned   // holy crap it worked.
}

const searchResults2= findSearchObject(classes, searchTerm)
console.log("SearchResults2", searchResults2)

////

  let incrementer = 1
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
  }, [incrementer])

  const edit = (item) =>
  {
    axiosWithAuth()
      .put(`api/class/${item.id}`, item)
      .then(res =>
      {
        console.log(res)
      })
      .catch("")
  }
  const deleteMe = (item) =>
  {
    // e.preventDefault()
    axiosWithAuth()
      .delete(`api/class/${item.id}`, item)
      .then(res =>
      {
        console.log(res)
      })
      .catch("")

      setTimeout(()=>{

        axiosWithAuth()
        .get("/api/class")
        .then(res =>
        {
          setClasses(res.data)
          console.log("classes", res.data)
        })
        .catch("not getting properly")
      },1500)
    incrementer++  // this did not work as expected
  }

  // console.log("data", data)
  return (<div>
    {/* <Searchbar classes={classes}></Searchbar> */}

    <form>
      <input type="text" placeholder="search for classes" value={searchTerm} onChange={handleChange} />
    </form>
    <h3>Search Results</h3>
    {searchResults.map(item => (
      <div className="card searchresults" key={item.id}>
        <li>Class Name: {item.name}</li>
        <li>Start Time: {item.start_time}</li>
        <li>Date: No Data</li>
        <li>Duration: {item.duration}</li>
        <li>Intensity: {item.intensity}</li>
        <li>type: {item.type}</li>
        <li>Location: {item.location}</li>

      </div>
    ))}
    <hr />
    <hr />
    <h3>All Classes:</h3>
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
        <button onClick={() => deleteMe(item)} > Delete</button>
        <button onClick={() => edit(item)} >Edit</button>
      </div>

    ))}
        Loading

  </div>
  )
}