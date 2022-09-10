import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import ClickButton from "./ClickButton";

export default function SearchBox(props: any) {
  const [query, setQuery] = useState("");

  // when enter key is pressed, set search query
  useEffect(() => {
    const onKeyDown = (e: any) => {
      if (e.key === "Enter") {
        props.setSearch(query);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [props, query]);

  // This is a hook that runs when the component is mounted
  function handleClick(e: any) {
    e.preventDefault();
    props.setSearch(query);
  }

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        placeholder="enter exercise"
        className="self-center flex h-10 w-22 placeholder:text-center border-2 border-black rounded-md p-2"
        onChange={(event) => setQuery(event.target.value)}
      />
      <ClickButton handleClick={(e: any) => handleClick(e)} />
    </div>
  );
}
