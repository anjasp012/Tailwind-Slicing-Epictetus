import { useState } from "react";
import Nav from "./Nav";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="container mx-auto px-24 py-10">
      <div
        onClick={() => setDropdown(false)}
        className={`${
          dropdown ? "absolute w-full h-full inset-0 block" : "hidden"
        }`}
      ></div>
      <div className="flex items-center">
        <div className="w-2/12">
          <div className="flex items-center text-lg">
            <div className="bg-[#4B5563] px-3.5 py-2 rounded font-sans">E</div>
            <div className="ml-3">Epictetus</div>
          </div>
        </div>
        <div className="w-7/12">
          <Nav />
        </div>
        <div className="w-3/12 pl-14">
          <div className="flex item-center">
            <img
              src="search.svg"
              className="absolute top-12 mt-1.5 ml-4 w-4"
              alt=""
            />
            <input
              className="py-2 px-10 w-full rounded-full bg-[#1F2937]/60"
              placeholder="Search"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
