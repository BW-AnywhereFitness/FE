import React from 'react'
import axios from 'axios'
import {data} from '../Data/lorem'



export const Searchbar = () =>
{

const  [searchTerm, setSearchTerm] = React.useState("")
  
  const handleClick= e =>{
    e.preventDefault()
    alert("clicker")
    data.filter(element =>{
      
    })
    


  }

const handleChange = (e) =>{
  setSearchTerm(e.target.value)
  console.log(searchTerm)
}


  return(
  <div>
    <form>
      <input type="text" placeholder="keywords"value={searchTerm} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
    </form>
  </div>)
}