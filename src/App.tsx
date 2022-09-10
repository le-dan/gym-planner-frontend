import { useEffect, useState } from "react";
import SearchBox from "./components/searchBox";
import fetchData from "./service/fetchExercises";
import axios, { AxiosResponse } from 'axios';

export default function App() {

  // use state for updating search
  const [search, setSearch] = useState("");

  // use state for updating list of user exercises
  const [exerciseData, setExerciseData] = useState([]);

  // If search changes, then fetch data from updated search and update user data
  useEffect(() => {
    if (search !== "") {
      const fetchData = async () => {
        axios.defaults.baseURL = "http://localhost:8080/";
        return await axios.get(`api/users/${search}/exercises`).then((response) => {
          setExerciseData(response.data);
        }).catch((error) => {
          console.log(error.data);
        });
      }
      fetchData();
    }
  }, [search]);

  // prints out exercise data after changing
  useEffect(() => {
    console.log(exerciseData);
  }, [exerciseData]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-6xl">gym-planner</div>
      <SearchBox setSearch={setSearch} />
      <div className="text-center">
        This is returned from SearchBox: {search}
      </div>
      <div className="border-2 border-white m-5">
        {/* {exercises.map(({ id, workout, exercise, repetitions, sets }, i) => (
          <div key={i}>
            workout: {workout}, exercise: {exercise}
          </div>
        ))} */}
      </div>
    </div>
  );
}
