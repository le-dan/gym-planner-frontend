import { motion } from "framer-motion";

export default function CreateWorkoutCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex h-[55%] w-[45%] items-center justify-center rounded-3xl bg-slate-100 shadow-xl"
    >
      <motion.div className="flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl bg-zinc-100 shadow-xl">
        <div className="select-none font-serif text-5xl">+</div>
        <div></div>
      </motion.div>
    </motion.div>
  );
}
