import { useEffect, useState } from "react";
import SearchBox from "./components/searchBox";
import FetchData from "./service/fetchData";

export default function App() {
  // use state for updating search
  const [search, setSearch] = useState("");

  // use state for updating list of user exercises
  const [userData, setUserData] = useState(['pog']);

  // If search changes, then fetch data from updated search and update user data
  useEffect(() => {
    if (search !== "") {
      FetchData(search);
      setUserData(() => FetchData(search));
    }
  }, [search]);

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
