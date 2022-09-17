import { motion } from "framer-motion";

export default function TitleDirectory() {
  return (
    <div className="fixed top-7 z-0 flex w-full justify-center text-center">
      {/* Rounded Container for Title Directory */}
      <motion.div
        layout
        whileHover={{ scale: 1.05 }}
        className="rounded-full bg-zinc-50 py-4 px-6 shadow-lg"
      >
        <div className="select-none font-serif text-xl font-bold">
          chaeyoung/gym-planner
        </div>
      </motion.div>
    </div>
  );
}
