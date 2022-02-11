import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="py-10">
      <div
        onClick={() => setDropdown(false)}
        className={`${
          dropdown ? "absolute w-full h-full inset-0 block" : "hidden"
        }`}
      ></div>
      <div className="flex items-center">
        <div className="lg:w-2/12 w-1/12">
          <Logo />
        </div>
        <div className="lg:w-7/12 w-10/12">
          <Nav />
        </div>
        <div className="lg:w-3/12 w-1/12 text-right">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
