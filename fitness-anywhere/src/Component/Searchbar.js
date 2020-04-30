import React from 'react'
import axios from 'axios'
import { data } from '../Data/lorem'



export const Searchbar = (props) =>
{

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([]) //want to instantiate with props.classes

  const handleClick = e =>
  {
    e.preventDefault()
    alert("clicker")
    // data.filter(element =>
    // {

    // })
  }
// React.useEffect(()=>{
//   setSearchResults(props.classes)

// },[])

  React.useEffect(() =>
  {

    console.log(props.classes)
    const results = props.classes.filter((item)=>{ 
      item.name.toLowerCase().includes(searchTerm)  // this is magic of search
      item.duration.toLowerCase().includes(searchTerm)
    }
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
        {console.log(searchResults)}
      {searchResults.map(item=>(
        <div className="card" key={item.id}>
        <li>Class Name: {item.name}</li>
        <li>Start Time: {item.start_time}</li>
        <li>Date: No Data</li>
        <li>Duration: {item.duration}</li>
        <li>Intensity: {item.intensity}</li>
        <li>type: {item.type}</li>
        <li>Location: {item.location}</li>

        </div>
      ))} 
      </ul>
    </div>)
}