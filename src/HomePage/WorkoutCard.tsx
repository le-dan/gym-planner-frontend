import { motion } from "framer-motion";

export default function WorkoutCard({ workoutName }: { workoutName: string }) {
  return (
    // Workout Card Container
    <div className="flex h-[95%] w-[85%] items-center justify-center rounded-3xl bg-slate-100 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl bg-zinc-100 shadow-xl"
      >
        <div className="select-none font-serif text-3xl">{workoutName}</div>
        <div></div>
      </motion.div>
    </div>
  );
}
