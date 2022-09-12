import { useEffect, useState } from "react";
import axios from "axios";

import LoginPopUp from "./LoginPopup/LoginPopUp";
import HomePage from "./HomePage/HomePage";

interface User {
  username: string;
  exercises: Exercise[];
}

interface Exercise {
  workout: string;
  exercise: string;
  repetitions: number;
  sets: number;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  // use effect for exercise search
  useEffect(() => {
    console.log(search);
    console.log(users);
  }, [search]);

  // load user data on initial mount
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8080/";
    axios
      .get<User[]>("api/users")
      .then(async (response) => {
        setUsers(await response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

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
    /*Main Div */
    <div className="h-full w-full">
      {/* Homepage Layout */}
      <HomePage setSearch={setSearch} />

      {/* Login Popup Card*/}
      <LoginPopUp
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        userList={users}
      />
    </div>
  );
}
