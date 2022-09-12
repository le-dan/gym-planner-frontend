import { motion } from "framer-motion";
import SearchBox from "../SearchBox";

export default function EnterUserBox({
  setSearch,
  variant,
}: {
  setSearch: any;
  variant: any;
}) {
  return (
    <motion.div variants={variant} className="loginCard w-full max-w-md">
      <div className="loginText">enter existing username</div>
      <SearchBox setSearch={setSearch} placeHolder={"enter username"} />
    </motion.div>
  );
}
