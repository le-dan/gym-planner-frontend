import axios from "axios";
import { useEffect, useState } from "react";
import InputCard from "../../components/InputCard";
import PopUp from "../../components/PopUp";
import User from "../../interfaces/User";
import Workout from "../../interfaces/Workout";
import ExerciseListCard from "./ExercisesPopUp/ExerciseListCard";
import WorkoutContainer from "./WorkoutContainer";

export default function WorkoutPage({ user }: { user: User }) {
  // Triggers form popup
  const [workoutPopUp, setWorkoutPopUp] = useState(false);

  // Clicked workout card name
  const [clickedWorkout, setClickedWorkout] = useState<Workout>();

  // Set exercise list popup
  const [exercisePopUp, setExercisePopUp] = useState(false);

  // Return new workout name from search
  const [newWorkoutName, setNewWorkoutName] = useState("");
  // New workout made from returned search
  const [newWorkout, setNewWorkout] = useState<Workout>({
    workoutName: "",
    exercises: [],
  });

  // Adds new workout
  useEffect(() => {
    // Only trigger if new workout input is not blank.
    if (newWorkoutName !== "") {
      // Removes workout popup.
      setWorkoutPopUp(false);

      // New workout object from given name argument.
      const createNewWorkout = (newWorkoutName: string): Workout => {
        const workout: Workout = {
          workoutName: newWorkoutName,
          exercises: [],
        };
        return workout;
      };

      // Sets the new workout
      const newWorkout = createNewWorkout(newWorkoutName);
      setNewWorkout(newWorkout);

      // Do axios post request to add new workout to user
      axios
        .post(`/api/users/${user.username}/addWorkout`, {
          workoutName: newWorkoutName,
          exercises: [],
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newWorkoutName, user]);

  return (
    <>
      {/* New Workout Popup */}
      {workoutPopUp && (
        <PopUp
          content={<InputCard setNewWorkoutName={setNewWorkoutName} />}
          handleClose={setWorkoutPopUp}
        />
      )}
      {/* Exercise Popup */}
      {exercisePopUp && (
        <PopUp
          content={<ExerciseListCard Workout={clickedWorkout!} />}
          handleClose={setExercisePopUp}
        />
      )}
      {/* Container full of workouts */}
      <WorkoutContainer
        user={user}
        setWorkoutPopUp={setWorkoutPopUp}
        newWorkout={newWorkout}
        setClickedWorkout={setClickedWorkout}
        setExercisePopUp={setExercisePopUp}
      />
    </>
  );
}
