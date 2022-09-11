import { HiOutlinePlus } from "react-icons/hi";
import ClickButton from "../ClickButton";
export default function CreateUserBox(props: any) {
  return (
    <div className="loginCard h-1/6">
      <div className="loginText">create new account</div>
      <ClickButton onClick={[]}>
        <HiOutlinePlus className="text-lg" />
      </ClickButton>
    </div>
  );
}
