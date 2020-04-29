import axios from "axios";

export const axiosWithAuth = () =>{
  const tolkien = localStorage.getItem("token")
  return axios.create({
    baseURL: "https://bw-anywhere-fitness-api.herokuapp.com",
    headers:{
      Authorization: tolkien
    }
  })
}