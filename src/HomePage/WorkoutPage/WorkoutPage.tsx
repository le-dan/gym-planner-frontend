import { useEffect, useState } from "react";
import InputCard from "../../components/InputCard";
import PopUp from "../../components/PopUp";
import WorkoutContainer from "../WorkoutContainer";

export default function WorkoutPage({ user }: { user: any }) {
  // Triggers form popup
  const [workoutPopUp, setWorkoutPopUp] = useState(false);
  // Return new workout from search
  const [newWorkout, setNewWorkout] = useState("");

  useEffect(() => {
    if (newWorkout !== "") {
      setWorkoutPopUp(false);
    }
  }, [newWorkout]);

  return (
    <>
      {/* Container full of workouts */}
      <WorkoutContainer
        user={user}
        setWorkoutPopUp={setWorkoutPopUp}
        newWorkout={newWorkout}
      />
      {/* New Workout Popup */}
      {workoutPopUp && (
        <PopUp
          content={<InputCard setNewWorkout={setNewWorkout} />}
          handleClose={setWorkoutPopUp}
        />
      )}
    </>
  );
}
