import ClickButton from "../ClickButton";
import SearchBox from "../SearchBox";

export default function EnterUserBox(props: any) {
  return (
    <div className="loginCard h-1/5 w-full max-w-md">
      <div className="loginText">enter username</div>
      <SearchBox setSearch={props.setSearch} placeholder={"enter username"} />
    </div>
  );
}
