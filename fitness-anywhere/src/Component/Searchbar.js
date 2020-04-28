import React from 'react'
import axios from 'axios'


export const Searchbar = () =>
{
  const handleClick= e =>{
    e.preventDefault()
    alert("clicker")
  }
  return(
  <div>
    <form>
      <input type="text" placeholder="keywords"/>
      <button onClick={handleClick}>Search</button>
    </form>
  </div>)
}