import { useState, useEffect } from "react";
import InputCard from "../components/InputCard";
import PopUp from "../components/PopUp";
import TitleDirectory from "./TitleDirectory";
import WorkoutContainer from "./WorkoutContainer";

export default function HomePage({ setSearch }: { setSearch: any }) {
  // Triggers form popup
  const [workoutPopUp, setWorkoutPopUp] = useState(false);

  useEffect(() => {
    console.log(workoutPopUp);
  }, [workoutPopUp]);

  return (
    <div className="fixed h-full w-full bg-white">
      <TitleDirectory />
      {/* Space divider for workout grid */}
      <WorkoutContainer setWorkoutPopUp={setWorkoutPopUp} />
      {workoutPopUp && (
        <PopUp content={<InputCard />} handleClose={setWorkoutPopUp} />
      )}
    </div>
  );
}
