import { motion } from "framer-motion";

export default function ClickButton(props: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.001 }}
      className="duration-25 h-10 w-[80%] rounded-md border-2 border-black py-2 px-3 transition ease-in-out hover:bg-black hover:text-white"
      onClick={props.handleClick}
    >
      <motion.div className="flex justify-center">{props.children}</motion.div>
    </motion.button>
  );
}
