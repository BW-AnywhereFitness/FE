import React from 'react'
import axios from 'axios'
import { data } from '../Data/lorem'



export const Searchbar = () =>
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
    const results = data.filter(item=>
      item.name.toLowerCase().includes(searchTerm) // these are not functions 
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
        <li>{item.name}</li>
      ))}
      </ul>
    </div>)
}