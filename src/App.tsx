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

  // Loaded user
  const [user, setUser] = useState<User>();

  // sets the login popup
  const [showLogin, setShowLogin] = useState(true);

  // load user workouts based on username entered
  // useEffect(() => {
  //   axios.get<Exercise[]>(`api/users/{enterdUser}/we`)
  // });

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

  // load entered user data based on search
  useEffect(() => {
    if (!showLogin && enteredUser !== "") {
      setUser(users.find((user) => user.username === enteredUser));
      console.log("users: " + JSON.stringify(users, undefined, 4));
    }
  }, [showLogin, users, enteredUser]);

  return (
    /*Main Div */
    <div className="h-full w-full">
      {/* Homepage Layout */}
      <HomePage user={user as User} />

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
