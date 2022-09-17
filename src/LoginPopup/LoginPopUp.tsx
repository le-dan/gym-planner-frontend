import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import CreateUserBox from "./CreateUserBox";
import EnterUserBox from "./EnterUserBox";

export default function LoginPopUp({
  showLogin,
  setShowLogin,
  setEnteredUser,
  enteredUser,
  userList,
}: {
  showLogin: boolean;
  setShowLogin: any;
  setEnteredUser: any;
  enteredUser: string;
  userList: any;
}) {
  useEffect(() => {
    if (enteredUser !== "") {
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].username === enteredUser) {
          setShowLogin(false);
          break;
        }
      }
      console.log(enteredUser);
    }
  }, [userList, setShowLogin, enteredUser]);

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

  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          layout
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 z-50 h-full w-full bg-stone-900"
        >
          {/*flex container for the title*/}
          <div className="absolute flex w-full select-none justify-center">
            <motion.div
              variants={containerVariants}
              initial={"hidden"}
              animate={"visible"}
              className="mt-12 text-center font-serif text-8xl text-white"
            >
              gym-planner
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial={"hidden"}
              animate={"visible"}
            >
              <div className="absolute bottom-2 font-serif text-xl italic text-blue-500">
                Dan Le
              </div>
            </motion.div>
          </div>
          {/* flex container for the login window cards*/}
          <motion.div
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <EnterUserBox setSearch={setEnteredUser} variant={childVariants} />
            <CreateUserBox variant={childVariants} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
