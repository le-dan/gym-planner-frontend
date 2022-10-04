import { useEffect, useState } from "react";

import User from "../../interfaces/User";
import Workout from "../../interfaces/Workout";
import AddWorkoutCard from "./AddWorkoutCard";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer({
  setClickedWorkout,
  setExercisePopUp,
  setWorkoutPopUp,
  newWorkout,
  user,
}: {
  setClickedWorkout: any;
  setExercisePopUp: any;
  setWorkoutPopUp: any;
  newWorkout: Workout;
  user: User;
}) {
  // List of workouts
  const [listWorkouts, setListWorkouts] = useState<Workout[]>([]);

  // Setting list of workouts from user
  useEffect(() => {
    if (user?.workouts) {
      setListWorkouts(user.workouts);
    }
  }, [user]);

  // Adding new workout to list
  useEffect(() => {
    if (newWorkout?.workoutName !== "") {
      setListWorkouts((prevListWorkouts) => [...prevListWorkouts, newWorkout]);
      console.log("workout added");
    }
  }, [newWorkout]);

  // Printing out workouts after adding new workout
  useEffect(() => {
    if (newWorkout.workoutName !== "") {
      console.log(listWorkouts);
    }
  }, [listWorkouts, newWorkout]);

  return (
    // Initial invisible separation background for workout containers
    <div className="absolute bottom-0 z-10 flex h-[88%] w-full items-center justify-center">
      {/* Background card */}
      <div className="absolute bottom-0 flex h-[95%] w-[95%] items-center justify-center rounded-t-[3rem] bg-stone-800 shadow-2xl">
        <div className="absolute z-10 grid h-[90%] w-[98%] grid-cols-5 grid-rows-2 items-center justify-items-center gap-y-5 ">
          <>
            {listWorkouts?.length! > 0
              ? listWorkouts!.map((workout, index) => (
                  <WorkoutCard
                    workoutName={workout.workoutName}
                    key={index}
                    setClickedWorkout={setClickedWorkout}
                    setExercisePopUp={setExercisePopUp}
                    username={user.username}
                  />
                ))
              : null}
          </>
          <AddWorkoutCard setTrigger={setWorkoutPopUp} />
        </div>
      </div>
    </div>
  );
}
