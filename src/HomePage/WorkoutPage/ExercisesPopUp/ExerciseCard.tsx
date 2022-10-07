import { motion } from "framer-motion";

export default function ExerciseCard({
  ExerciseName,
}: {
  ExerciseName: string;
}) {
  return (
    <motion.div
      layout
      whileHover={{
        height: "5rem",
        transition: { duration: 0.25 },
      }}
      className={
        "flex h-[2em] w-[80%] justify-center rounded-3xl border-[1px] border-black"
      }
    >
      <div className="flex h-[2em] w-full items-center justify-center">
        <div className="select-none">{ExerciseName}</div>
      </div>
    </motion.div>
  );
}
