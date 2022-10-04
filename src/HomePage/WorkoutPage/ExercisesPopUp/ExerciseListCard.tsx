import { motion } from "framer-motion";
import Workout from "../../../interfaces/Workout";

export default function ExerciseListCard({ Workout }: { Workout: Workout }) {
  return (
    <motion.div className="loginCard z-40 flex h-[70%] w-[50%] flex-col justify-center gap-3 opacity-100">
      <div className="loginText select-none">{Workout.workoutName}</div>
    </motion.div>
  );
}
