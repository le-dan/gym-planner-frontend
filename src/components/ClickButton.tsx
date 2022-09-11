export default function ClickButton(props: any) {
  return (
    <button
      className="duration-250 m-4 h-10 rounded-md border-2 border-black py-2 px-3 transition ease-in-out hover:bg-black hover:text-white"
      onClick={props.handleClick}
    >
      <div className="flex justify-center">{props.children}</div>
    </button>
  );
}
