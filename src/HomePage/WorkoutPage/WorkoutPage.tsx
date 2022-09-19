import { useEffect, useState } from "react";
import InputCard from "../../components/InputCard";
import PopUp from "../../components/PopUp";
import User from "../../interfaces/User";
import Workout from "../../interfaces/Workout";
import WorkoutContainer from "../WorkoutContainer";

export default function WorkoutPage({ user }: { user: User }) {
  // Triggers form popup
  const [workoutPopUp, setWorkoutPopUp] = useState(false);
  // Return new workout name from search
  const [newWorkoutName, setNewWorkoutName] = useState("");

  // New workout made from returned search
  const [newWorkout, setNewWorkout] = useState<Workout>({
    workoutName: "",
    exercises: [],
  });

  useEffect(() => {
    if (newWorkoutName !== "") {
      setWorkoutPopUp(false);

      const createNewWorkout = (newWorkoutName: string): Workout => {
        const workout: Workout = {
          workoutName: newWorkoutName,
          exercises: [],
        };
        return workout;
      };
      setNewWorkout(createNewWorkout(newWorkoutName));
    }
  }, [newWorkoutName]);

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
          content={<InputCard setNewWorkoutName={setNewWorkoutName} />}
          handleClose={setWorkoutPopUp}
        />
      )}
    </>
  );
}
