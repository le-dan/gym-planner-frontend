import { TbHandClick } from "react-icons/tb";

export default function ClickButton(props: any) {
  return (
    <button
      className="m-4 h-10 rounded-md border-2 border-black py-2 px-3 transition duration-75 ease-in-out hover:bg-black hover:text-white"
      onClick={props.handleClick}
    >
      <div className="flex justify-center">{props.children}</div>
    </button>
  );
}
