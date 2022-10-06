import { motion } from "framer-motion";

export default function AddExerciseCard({
  setTrigger,
  trigger,
}: {
  setTrigger: any;
  trigger: boolean;
}) {
  // Variant for animation

  return (
    <motion.div
      layout
      variants={{
        open: { height: 70, width: "80%" },
        closed: { height: 30, width: 70 },
      }}
      initial={"closed"}
      animate={trigger ? "open" : "closed"}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, height: { delay: 0.25 } }}
      onClick={() => setTrigger(!trigger)}
      className="flex cursor-pointer items-center justify-center rounded-3xl border-[1px] border-black"
    >
      {trigger ? null : <div className="select-none text-xl">+</div>}
    </motion.div>
  );
}
