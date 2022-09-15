import { motion } from "framer-motion";
import SearchBox from "./SearchBox";

export default function InputCard() {
  return (
    <motion.div className="loginCard flex h-[20%] w-full max-w-sm flex-col justify-center gap-3 opacity-100">
      <div className="loginText">Enter New Workout</div>
      <SearchBox setSearch={undefined} placeHolder={""} />
    </motion.div>
  );
}
