import { motion } from "framer-motion";
import { useState } from "react";
import Workout from "../../../interfaces/Workout";
import AddExerciseCard from "./AddExerciseCard";
import ExerciseCard from "./ExerciseCard";

export default function ExerciseListCard({ Workout }: { Workout: Workout }) {
  // Create a list of exercises from user
  const exerciseList = Workout?.exercises?.map((exercise, index) => (
    <ExerciseCard key={index} ExerciseName={exercise.exerciseName} />
  ));

  // Trigger for add exercise card
  const [triggerNewExercise, setTriggerNewExercise] = useState(false);

  // // Use effect for trigger
  // useEffect(() => {
  //   if (triggerNewExercise) {
  //     setTriggerNewExercise(false);
  //   }
  // }, [triggerNewExercise]);

  // Create a new exercise card
  return (
    /* Pop Up Container Card*/
    <motion.div className="loginCard z-40 flex h-[75%] w-[50%] flex-col items-center gap-3 bg-zinc-100 pt-[0.4rem] opacity-100">
      <div className="flex w-full justify-center">
        <div className="select-none text-[4rem] text-purple-500">
          {Workout.workoutName}
        </div>
      </div>
      {/* Exercise List Container */}
      <div className="flex h-[80%] w-[80%] flex-col content-start justify-start gap-2 rounded-3xl bg-zinc-50 p-6 shadow-2xl">
        {/* Exercise List */}
        {exerciseList}
        {/* Add Exercise Card */}
        <div className="flex h-[2em] w-1/2 justify-center">
          <AddExerciseCard
            setTrigger={setTriggerNewExercise}
            trigger={triggerNewExercise}
          />
        </div>
      </div>
    </motion.div>
  );
}
