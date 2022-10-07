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
        "flex h-[2em] w-1/3 justify-center rounded-3xl border-[1px] border-black"
      }
    >
      {/*Container for Text */}
      <div className="flex h-[2em] w-full items-center justify-center">
        <div className="select-none font-medium">{ExerciseName}</div>
      </div>
    </motion.div>
  );
}
