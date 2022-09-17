import { AnimatePresence, motion } from "framer-motion";
import InputCard from "./InputCard";

export default function PopUp({
  content,
  handleClose,
}: {
  content: any;
  handleClose: any;
}) {
  return (
    <AnimatePresence>
      <motion.div className="flex h-full w-full items-center justify-center">
        <motion.div
          onClick={() => handleClose(false)}
          className="absolute top-0 z-20  h-full w-full  bg-stone-900/70"
        ></motion.div>
        {content}
      </motion.div>
    </AnimatePresence>
  );
}
