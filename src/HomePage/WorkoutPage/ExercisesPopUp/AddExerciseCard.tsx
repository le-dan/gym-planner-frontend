import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SearchBox from "../../../components/SearchBox";

export default function AddExerciseCard({
  setTrigger,
  trigger,
}: {
  setTrigger: any;
  trigger: boolean;
}) {
  const plusButtonVariant = {
    open: {
      opacity: 1,
      rotate: -90,
      transition: { opacity: { duration: 3 } },
    },
    closed: { opacity: 0, rotate: 90 },
  };

  const addExerciseVariant = {
    open: { opacity: 1, transition: { delay: 0.75 } },
    closed: { opacity: 0 },
  };

  return (
    <motion.div
      layout="size"
      variants={{
        open: {
          height: 70,
          width: "60%",
        },
        closed: {
          height: 30,
          width: 70,
        },
      }}
      initial={"closed"}
      animate={trigger ? "open" : "closed"}
      transition={{
        height: { duration: 0.3, delay: trigger ? 0.3 : 0 },
        width: { duration: 0.3, delay: trigger ? 0 : 0.3 },
        stiffness: 1000,
      }}
      onClick={() => setTrigger(!trigger)}
      className={`${
        trigger ? "border-[2px] border-green-500" : "border-[1px] border-black"
      }  flex cursor-pointer flex-col items-center justify-center  rounded-3xl transition duration-[1s]`}
    >
      {/* + button */}
      <AnimatePresence>
        {!trigger && (
          <motion.div
            variants={plusButtonVariant}
            animate={"open"}
            exit={"closed"}
            transition={{ rotate: { duration: 0.5 } }}
            className="absolute select-none text-lg"
          >
            +
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Box */}
      <AnimatePresence>
        {trigger && (
          <motion.input
            autoFocus
            variants={addExerciseVariant}
            initial={"closed"}
            animate={trigger ? "open" : "closed"}
            exit={"closed"}
            className="focus searchBox z-50 h-1/2 w-[80%] text-center"
            placeholder="Enter New Exercise"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
