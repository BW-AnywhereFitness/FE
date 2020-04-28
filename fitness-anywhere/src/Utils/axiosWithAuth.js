import axios from "axios";

export const axiosWithAuth = () =>{
  const tolkien = localStorage.getItem("token")
  return axios.create({
    baseURL: "http://localhost:5000",
    headers:{
      Authorization: tolkien
    }
  })
}