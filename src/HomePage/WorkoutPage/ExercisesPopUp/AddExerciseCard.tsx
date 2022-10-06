import { AnimatePresence, motion } from "framer-motion";

export default function AddExerciseCard({
  setTrigger,
  trigger,
}: {
  setTrigger: any;
  trigger: boolean;
}) {
  return (
    <motion.div
      layout="size"
      variants={{
        open: { height: 70, width: "80%" },
        closed: { height: 30, width: 70 },
      }}
      initial={"closed"}
      animate={trigger ? "open" : "closed"}
      whileHover={{
        scale: trigger ? 1 : 1.1,
        transition: { duration: 0.1, ease: "circInOut" },
      }}
      transition={{
        height: { duration: 0.3, delay: trigger ? 0.2 : 0 },
        width: { duration: 0.3, delay: trigger ? 0 : 0.2 },
        stiffness: 1000,
      }}
      onClick={() => setTrigger(!trigger)}
      className="flex cursor-pointer items-center justify-center rounded-3xl border-[1px] border-black"
    >
      <AnimatePresence>
        {trigger ? null : (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="select-none text-xl"
          >
            +
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
