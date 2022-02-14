import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [canvas, offCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="pt-6 pb-8 md:py-10">
      <div className="flex items-center justify-between md:justify-start">
        <div className="flex md:hidden">
          <button onClick={() => offCanvas(!canvas)}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M3 12H21"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="lg:w-2/12 md:w-1/12">
          <Logo />
        </div>

        <div
          className={`lg:w-7/12 md:w-10/12 w-full z-10 md:relative fixed top-0 transition-all duration-300 md:duration-75 md:bg-none bg-gradient-to-b from-[#374151] to-[#111827] lg:mx-0 mx-auto md:block ${
            canvas ? "left-0 min-h-full" : "-left-full md:inset-0 min-h-full"
          }`}
        >
          <button
            onClick={() => offCanvas(!canvas)}
            className="absolute right-10 top-8 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
          <Nav />
        </div>
        <div className="flex lg:hidden">
          <button onClick={() => setSearch(!search)}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div
          className={`lg:w-3/12 absolute z-20 lg:static w-full px-8 md:px-14 lg:px-0 lg:text-right transition-all duration-300 lg:duration-75 ${
            search ? "right-0" : "-right-full"
          }`}
        >
          <SearchInput />
          <button
            onClick={() => setSearch(!search)}
            className="absolute right-12 md:right-16 md:mr-2 top-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
