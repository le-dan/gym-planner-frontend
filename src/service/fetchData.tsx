import axios from "axios";

export default function FetchData() {
  axios.defaults.baseURL = "http://localhost:8080";
  axios
    .get("/api/users")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
