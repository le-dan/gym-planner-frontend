import { AnimatePresence, motion } from "framer-motion";

export default function PopUp({
  content,
  handleClose,
}: {
  content: any;
  handleClose: any;
}) {
  return (
    <>
      <motion.div
        onClick={() => handleClose(false)}
        className="absolute top-0 z-20  h-full w-full  bg-stone-900/70"
      ></motion.div>
      <motion.div
        transition={{ duration: 0.25 }}
        className="z-30 flex h-full w-full items-center justify-center"
      >
        {content}
      </motion.div>
    </>
  );
}
