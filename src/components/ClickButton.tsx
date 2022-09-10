import { TbHandClick } from "react-icons/tb";

export default function ClickButton(props: any) {
    return (<button className="h-10 m-4 border-2 border-black rounded-md py-2 px-3 hover:bg-black hover:text-white transition duration-75 ease-in-out"
        onClick={props.handleClick}
    >
        <TbHandClick className="text-lg" />
    </button>
    );

}