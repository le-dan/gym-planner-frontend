import { motion } from "framer-motion";
import InputCard from "../components/InputCard";

export default function CreateWorkoutPopUp() {
  return (
    // Background div
    <motion.div className="fixed top-0 flex h-full w-full items-center justify-center bg-stone-900/70">
      <InputCard />
    </motion.div>
  );
}
