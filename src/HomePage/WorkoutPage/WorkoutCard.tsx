import { motion } from "framer-motion";

export default function WorkoutCard({ workoutName }: { workoutName: string }) {
  return (
    // Workout Card Container
    <div className="workoutCardOuter flex h-[70%] w-[75%] items-center justify-center rounded-3xl shadow-xl">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="workoutCardInner flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl shadow-xl"
      >
        <div className="select-none text-3xl font-extralight">
          {workoutName}
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}
