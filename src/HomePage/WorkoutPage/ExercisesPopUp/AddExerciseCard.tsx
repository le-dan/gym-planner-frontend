import { motion } from "framer-motion";

export default function AddExerciseCard({ setTrigger }: { setTrigger: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => setTrigger(true)}
      className="flex h-[10%] w-[25%] items-center justify-center rounded-3xl border-[1.5px]"
    >
      <div className="select-none text-xl">+</div>
    </motion.div>
  );
}
