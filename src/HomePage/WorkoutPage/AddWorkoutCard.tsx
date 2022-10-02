import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AddWorkoutCard({ setTrigger }: { setTrigger: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="workoutCardOuter flex h-[55%] w-[45%] items-center justify-center rounded-3xl shadow-xl"
    >
      <motion.div
        onClick={() => setTrigger(true)}
        className="workoutCardInner flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl shadow-xl"
      >
        <div className="select-none text-4xl font-extralight">+</div>
      </motion.div>
    </motion.div>
  );
}
