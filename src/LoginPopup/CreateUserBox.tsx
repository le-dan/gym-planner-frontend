import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import ClickButton from "../components/ClickButton";
export default function CreateUserBox({ variant }: { variant: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={variant}
      className="loginCard absolute bottom-[20%] flex items-center gap-3"
    >
      <div className="loginText select-none">create new user</div>
      <ClickButton onClick={() => setExpanded(true)}>
        <HiOutlinePlus className="text-lg" />
      </ClickButton>
    </motion.div>
  );
}
