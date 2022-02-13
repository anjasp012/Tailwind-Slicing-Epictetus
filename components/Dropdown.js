import { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <li>
        <button
          onClick={() => setDropdown(!dropdown)}
          className="flex items-center"
        >
          <div className="mr-2">Lainnya</div>
          <img
            src="chevron-down.svg"
            className={`${
              dropdown
                ? "rotate-180 ease-in-out transition-all duration-200"
                : "transition-all ease-in-out duration-200"
            }`}
            alt=""
          />
        </button>
        <div
          className={`${dropdown ? "fixed inset-0" : ""}`}
          onClick={() => setDropdown(!dropdown)}
        ></div>
        <div className="absolute mt-3 bg-[#1F2937] rounded overflow-hidden">
          <ul
            className={`${
              dropdown
                ? "py-0 w-[197px] h-[140px] transition-all ease-in-out duration-100"
                : "py-0 w-0 h-0 transition-all ease-in-out duration-100"
            } `}
          >
            <DropdownItem />
          </ul>
        </div>
      </li>
    </>
  );
}
