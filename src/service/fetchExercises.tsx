import axios from "axios";
import { useState } from "react";

export default function fetchExercises(search: String) {
  axios.defaults.baseURL = "http://localhost:8080/";

  // axios({
  //   method: 'post',
  //   url: '/addUser',
  //   data: {
  //     username: 'minsung',
  //     exercises: []
  //   }
  // });
  axios
    .get(`api/users/${search}/exercises`)
    .then(async (response) => {
      console.log(response.data);
      return await response.data;
    })
    .catch((error) => {
      console.log(error.data);
    });
  return [];
}
