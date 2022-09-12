import { motion } from "framer-motion";
import { HiOutlinePlus } from "react-icons/hi";
import ClickButton from "../ClickButton";
export default function CreateUserBox({ variant }: { variant: any }) {
  return (
    <motion.div variants={variant} className="loginCard absolute bottom-[9rem]">
      <div className="loginText">create new user</div>
      <ClickButton onClick={[]}>
        <HiOutlinePlus className="text-lg" />
      </ClickButton>
    </motion.div>
  );
}
