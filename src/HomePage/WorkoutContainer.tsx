import { useEffect, useRef, useState } from "react";
import AddWorkoutCard from "./AddWorkoutCard";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer({
  setWorkoutPopUp,
  newWorkout,
}: {
  setWorkoutPopUp: any;
  newWorkout: string;
}) {
  // List of workouts
  const [listWorkouts, setListWorkouts] = useState([""]);

  useEffect(() => {
    if (newWorkout !== "") {
      setListWorkouts((listWorkouts) => [...listWorkouts, newWorkout]);
      console.log("workout added");
    }
  }, [newWorkout]);

  return (
    // Initial background for workout containers
    <div className="absolute bottom-0 z-10 flex h-[88%] w-full items-center justify-center">
      {/* Background card */}
      <div className="absolute bottom-0 flex h-[95%] w-[95%] items-center justify-center rounded-t-3xl bg-slate-100 shadow-2xl">
        <div className="absolute z-10 grid h-[90%] w-[98%] grid-cols-4 grid-rows-2 items-center justify-items-center gap-y-5 ">
          <>
            {listWorkouts.length > 0
              ? listWorkouts.map((workoutName, index) => (
                  <WorkoutCard workoutName={workoutName} key={index} />
                ))
              : null}
          </>
          <AddWorkoutCard setTrigger={setWorkoutPopUp} />
        </div>
      </div>
    </div>
  );
}
