import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";

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
  function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Button clicked: " + query);
    props.setSearch(query);
  }

  // Button
  const ClickButton = () => {
    return (<button
      className="h-10 m-4 border-2 border-black rounded-md py-2 px-3 hover:bg-black hover:text-white transition duration-75 ease-in-out"
      onClick={(e) => handleSubmit(e)}
    >
      <TbHandClick className="text-lg" />
    </button>);
  }

  return (
    <div className="relative h-1/2 flex justify-center items-center">
      <input
        type="text"
        placeholder="enter exercise"
        className="flex h-10 w-22 placeholder:text-center border-2 border-black rounded-md p-2"
        onChange={(event) => setQuery(event.target.value)}
      />
      <ClickButton />
    </div>
  );
}
