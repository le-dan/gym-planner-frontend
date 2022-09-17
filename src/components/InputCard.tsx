import { motion } from "framer-motion";
import SearchBox from "./SearchBox";

export default function InputCard() {
  return (
    <motion.div className="loginCard z-40 flex h-[20%] w-[25%] flex-col justify-center gap-3 opacity-100">
      <div className="loginText select-none">Enter New Workout</div>
      <SearchBox setSearch={undefined} placeHolder={"Workout Name"} />
    </motion.div>
  );
}
