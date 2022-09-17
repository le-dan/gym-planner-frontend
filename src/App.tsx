import { useEffect, useState } from "react";
import axios from "axios";

import LoginPopUp from "./LoginPopup/LoginPopUp";
import HomePage from "./HomePage/HomePage";
import User from "./interfaces/User";

export default function App() {
  // List of users fetched from API
  const [users, setUsers] = useState<User[]>([]);

  // Entered username after logging in
  const [enteredUser, setEnteredUser] = useState("");
  // sets the login popup
  const [showLogin, setShowLogin] = useState(true);

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
      <HomePage
        setSearch={undefined}
        user={users.find((user) => user.username === enteredUser)}
      />

      {/* Login Popup Card*/}
      <LoginPopUp
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setEnteredUser={setEnteredUser}
        enteredUser={enteredUser}
        userList={users}
      />
    </div>
  );
}
