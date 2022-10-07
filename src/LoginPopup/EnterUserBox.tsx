import { motion } from "framer-motion";
import SearchBox from "../components/SearchBox";
export default function EnterUserBox({
  setSearch,
  variant,
}: {
  setSearch: any;
  variant: any;
}) {
  return (
    <motion.div
      whileFocus={{ scale: 1.1 }}
      variants={variant}
      className="loginCard w-full max-w-md gap-3 pb-9"
    >
      <div className="loginText select-none">enter existing username</div>
      <SearchBox
        setSearch={setSearch}
        placeHolder={"enter username"}
        heightWidth={"h-10 w-2/3"}
      />
    </motion.div>
  );
}
