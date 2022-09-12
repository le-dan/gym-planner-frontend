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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.25,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {},
    },
  };

  return showLogin ? (
    // background div
    <div className="absolute top-0 z-50 h-full w-full bg-stone-900">
      <div className="absolute  w-full text-center">
        <motion.div
          variants={containerVariants}
          initial={"hidden"}
          animate={"visible"}
          className="mt-12 w-full text-center font-serif  text-8xl text-white"
        >
          gym-planner
        </motion.div>
        <div className="w-full text-center text-white">by Dan Le</div>
      </div>
      <motion.div
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        className="flex h-full w-full flex-col items-center justify-center  gap-4 "
      >
        <EnterUserBox setSearch={setUsername} variant={childVariants} />
        <CreateUserBox variant={childVariants} />
      </motion.div>
    </div>
  ) : (
    <div></div>
  );
}
