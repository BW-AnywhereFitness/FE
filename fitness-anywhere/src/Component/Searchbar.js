import React from 'react'
import axios from 'axios'
import { data } from '../Data/lorem'



export const Searchbar = (props) =>
{

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])

  const handleClick = e =>
  {
    e.preventDefault()
    alert("clicker")
    // data.filter(element =>
    // {

    // })
  }

  React.useEffect(() =>
  {
    console.log(props.classes)
    const results = props.classes.filter(item=> // no longer data
      item.name.toLowerCase().includes(searchTerm)  
    )
    setSearchResults(results)
}, [searchTerm])


  const handleChange = (e) =>
  {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }


  return (
    <div>
      <form>
        <input type="text" placeholder="keywords" value={searchTerm} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      <ul>
      {searchResults.map(item=>(
        <>
        <li>Class Name: {item.name}</li>
        <li>Start Time: {item.start_time}</li>
        </>
      ))} 
      </ul>
    </div>)
}