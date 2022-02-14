export default function SearchInput() {
  return (
    <div className="relative ">
      <div className="absolute top-3 left-3 md:left-4 sm:left-2 lg:left-14 xl:left-16 pointer-events-none">
        <svg
          className="absolute w-[16px] h-[16px]"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.25 12.25L9.71251 9.71246"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="py-2 pl-10 md:pl-10 lg:pl-12 pr-10 lg:pr-4 w-full lg:w-10/12 placeholder-shown:border-gray-500 rounded-full z-50 lg:bg-[#1F2937]/60 bg-[#1F2937]"
      />
    </div>
  );
}
