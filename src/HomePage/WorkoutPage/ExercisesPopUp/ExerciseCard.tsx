import { motion } from "framer-motion";

export default function ExerciseCard({
  ExerciseName,
}: {
  ExerciseName: string;
}) {
  return (
    <motion.div
      whileHover={{
        height: "5rem",
        transition: { duration: 0.25 },
      }}
      className={
        "flex w-[80%] justify-center rounded-3xl border-[1px] border-black"
      }
    >
      <div className="select-none">{ExerciseName}</div>
    </motion.div>
  );
}
