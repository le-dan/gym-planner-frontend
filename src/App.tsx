import { useEffect, useState } from "react";
import SearchBox from "./components/searchBox";
import { exercises } from "./data/exercises";
import FetchData from "./service/fetchData";

export default function App() {
  const [search, setSearch] = useState("");

  FetchData();
  // useEffect(() => {
  //   FetchData(search);
  // }, [search]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <SearchBox setSearch={setSearch} />
      <div className="text-center">
        This is returned from SearchBox: {search}
      </div>
      <div className="border-2 border-white m-5">
        {exercises.map(({ id, workout, exercise, repetitions, sets }, i) => (
          <div key={i}>
            workout: {workout}, exercise: {exercise}
          </div>
        ))}
      </div>
    </div>
  );
}
