import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SearchBox({
  setSearch,
  placeHolder,
}: {
  setSearch: any;
  placeHolder: string;
}) {
  const [query, setQuery] = useState("");

  // when enter key is pressed, set search query
  useEffect(() => {
    const onKeyDown = (e: any) => {
      if (e.key === "Enter") {
        setSearch(query);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setSearch, query]);

  return (
    <div className="z-0 flex items-center justify-center">
      <motion.input
        whileFocus={{ scale: 1.025 }}
        initial={{ scale: 1 }}
        type="text"
        placeholder={placeHolder}
        className="flex h-10 w-2/3 select-none self-center rounded-md border-2 border-black p-2 placeholder:text-center"
        onChange={(event) => setQuery(event.target.value)}
      ></motion.input>
    </div>
  );
}
