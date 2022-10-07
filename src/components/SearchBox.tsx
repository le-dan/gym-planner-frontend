import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SearchBox({
  setSearch,
  placeHolder,
  heightWidth,
}: {
  setSearch: any;
  placeHolder: string;
  heightWidth: string;
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
    <div className="flex items-center justify-center">
      <motion.input
        autoFocus
        whileFocus={{ scale: 1.025 }}
        initial={{ scale: 1 }}
        type="text"
        placeholder={placeHolder}
        className={`searchBox flex ${heightWidth}`}
        onChange={(event) => setQuery(event.target.value)}
      ></motion.input>
    </div>
  );
}
