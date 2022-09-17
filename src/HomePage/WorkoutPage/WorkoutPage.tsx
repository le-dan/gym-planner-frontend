import { useEffect, useState } from "react";
import InputCard from "../../components/InputCard";
import PopUp from "../../components/PopUp";
import WorkoutContainer from "../WorkoutContainer";

export default function WorkoutPage() {
  // Triggers form popup
  const [workoutPopUp, setWorkoutPopUp] = useState(false);
  // Return new workout from search
  const [newWorkout, setNewWorkout] = useState("");

  useEffect(() => {
    console.log("new workout set: " + newWorkout);
    setWorkoutPopUp(false);
  }, [newWorkout]);

  return (
    <>
      <WorkoutContainer setWorkoutPopUp={setWorkoutPopUp} />
      {workoutPopUp && (
        <PopUp
          content={<InputCard setNewWorkout={setNewWorkout} />}
          handleClose={setWorkoutPopUp}
        />
      )}
    </>
  );
}
