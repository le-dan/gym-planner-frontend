import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CreateUserBox from "./CreateUserBox";
import EnterUserBox from "./EnterUserBox";

export default function LoginPopUp({
  showLogin,
  setShowLogin,
  userList,
}: {
  showLogin: boolean;
  setShowLogin: any;
  userList: any;
}) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username === username) {
        setShowLogin(false);
        break;
      }
    }
    console.log(username);
  }, [userList, setShowLogin, username]);

  const containerVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        delay: 0.25,
      },
    },
  };

  return showLogin ? (
    <motion.div className="absolute top-0 z-50 h-full w-full bg-black">
      <motion.div className="absolute mt-9 w-full text-center text-7xl text-white">
        Gym Planner
      </motion.div>
      <div className="flex h-full w-full flex-col items-center justify-center  gap-4 ">
        <EnterUserBox setSearch={setUsername} />
        <CreateUserBox />
      </div>
    </motion.div>
  ) : (
    <div></div>
  );
}
