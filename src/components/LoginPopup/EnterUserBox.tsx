import SearchBox from "../SearchBox";

export default function EnterUserBox({ setSearch }: { setSearch: any }) {
  return (
    <div className="loginCard h-1/5 w-full max-w-md">
      <div className="loginText">enter username</div>
      <SearchBox setSearch={setSearch} placeHolder={"enter username"} />
    </div>
  );
}
