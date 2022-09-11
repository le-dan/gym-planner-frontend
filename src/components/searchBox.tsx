import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import ClickButton from "./ClickButton";

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

  // This is a hook that runs when the component is mounted
  function handleClick(e: any) {
    e.preventDefault();
    setSearch(query);
  }

  return (
    <div className="relative z-0 flex items-center justify-center">
      <input
        type="text"
        placeholder={placeHolder}
        className="w-22 flex h-10 self-center rounded-md border-2 border-black p-2 placeholder:text-center"
        onChange={(event) => setQuery(event.target.value)}
      />
      <ClickButton handleClick={handleClick}>
        <TbHandClick className="text-lg" />
      </ClickButton>
    </div>
  );
}
