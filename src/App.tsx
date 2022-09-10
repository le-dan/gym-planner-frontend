import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

import SearchBox from "./components/SearchBox";
import UserLogin from "./components/UserLogin";

interface User {
  username: string,
  exercises: Exercise[]
}

interface Exercise {
  workout: string,
  exercise: string,
  repetitions: number,
  sets: number
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  // load user data on initial mount
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8080/";
    axios.get<User[]>('api/users').then(async response => {
      setUsers(await response.data);
    }).catch(error => {
      console.log(error.data);
    });
  }, []);

  // use state for updating search


  // // use state for updating list of user exercises
  // const [exerciseData, setExerciseData] = useState([]);
  // // If search changes, then fetch data from updated search and update user data
  // useEffect(() => {
  //   if (search !== "") {
  //     fetchExercises(search).then((response) => {
  //       setExerciseData(response.data);
  //     });
  //   }
  // }, [search]);

  // // prints out exercise data after changing
  // useEffect(() => {
  //   console.log(exerciseData);
  // }, [exerciseData]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <motion.div className="text-6xl" whileHover={{ scale: 1.1 }}>gym-planner</motion.div>
      <UserLogin />
      <SearchBox setSearch={setSearch} />
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
