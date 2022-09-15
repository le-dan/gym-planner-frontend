import { motion } from "framer-motion";

export default function WorkoutCard({ workoutName }: { workoutName: string }) {
  return (
    // Workout Card Container

    // have onclick on container
    <div className="flex h-[95%] w-[85%] items-center justify-center rounded-3xl bg-slate-100 shadow-lg">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl bg-zinc-800 shadow-xl"
      >
        <div className="select-none font-serif text-3xl text-white">
          {workoutName}
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}
