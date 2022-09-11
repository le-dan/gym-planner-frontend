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
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
  };

  return showLogin ? (
    // background div
    <div className="absolute top-0 z-50 flex h-full w-full bg-black">
      <motion.div
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        className="absolute mt-12 w-full text-center text-8xl font-thin text-slate-200"
      >
        Gym Planner
      </motion.div>
      <motion.div className="flex h-full w-full flex-col items-center justify-center  gap-4 ">
        <EnterUserBox setSearch={setUsername} />
        <CreateUserBox />
      </motion.div>
    </div>
  ) : (
    <div></div>
  );
}
