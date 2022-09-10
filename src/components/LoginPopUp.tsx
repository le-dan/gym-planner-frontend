import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";

export default function LoginPopUp(props: any) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        console.log(username);
    }, [username]);


    return (props.trigger) ? (
        <div className="z-10 fixed flex justify-center items-center h-full w-full bg-black/[.2]">
            <div className="shadow-2xl rounded-3xl relative p-10 pb-20 w-full h-3/5 max-w-md bg-white">
                <div className="text-center">enter username</div>
                <SearchBox setSearch={setUsername} />
            </div>
        </div>
    ) : <div></div>;
}