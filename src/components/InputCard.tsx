import { motion } from "framer-motion";
import SearchBox from "./SearchBox";

export default function InputCard({
  setNewWorkoutName,
}: {
  setNewWorkoutName: any;
}) {
  return (
    <motion.div className="loginCard z-40 flex h-[20%] w-[25%] flex-col justify-center gap-3 border-0 opacity-100">
      <div className="loginText select-none">Enter New Workout</div>
      <SearchBox
        setSearch={setNewWorkoutName}
        placeHolder={"Workout Name"}
        heightWidth={"h-10 w-2/3"}
      />
    </motion.div>
  );
}
