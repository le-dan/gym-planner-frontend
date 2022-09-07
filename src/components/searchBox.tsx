import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";

export default function SearchBox(props: any) {
  const [query, setQuery] = useState("");

  // This is a hook that runs when the component is mounted
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Button clicked: " + query);
    props.setSearch(query);
  }

  // on input, update query
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="relative h-1/2 flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="enter exercise"
        className="placeholder:text-center border-2 border-black rounded-md p-2"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        className="m-12 border-2 border-black rounded-md py-2 px-5 hover:bg-black hover:text-white transition duration-75 ease-in-out"
        onClick={(e) => handleSubmit(e)}
      >
        <TbHandClick className="text-lg" />
      </button>
    </div>
  );
}
