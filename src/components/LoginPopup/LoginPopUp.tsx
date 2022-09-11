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

  return showLogin ? (
    <div className="fixed z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/[.5]">
      <EnterUserBox setSearch={setUsername} />
      <CreateUserBox />
    </div>
  ) : (
    <div></div>
  );
}
