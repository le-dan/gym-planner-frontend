import { motion } from "framer-motion";

export default function AddWorkoutCard({ setTrigger }: { setTrigger: any }) {
  return (
    // Outer part of card
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="workoutCardOuter flex h-[45%] w-[45%] items-center justify-center rounded-3xl shadow-xl"
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
