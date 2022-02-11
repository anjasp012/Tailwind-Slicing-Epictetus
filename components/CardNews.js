import NewsInfo from "./NewsInfo";

export default function CardNews({ thumbnail, ...news }) {
  return (
    <>
      <div className="relative group rounded-lg overflow-hidden mb-5">
        <img
          src={thumbnail}
          className="w-full saturate-50 group-hover:saturate-100"
          alt=""
        />
        <a
          href="#"
          className="absolute bottom-0 group-hover:right-0 -right-full transition-all rounded-tl-md duration-300 px-3 py-1.5 bg-white group-hover:bg-[#273953]"
        >
          Read More
        </a>
      </div>
      <NewsInfo {...news} />
    </>
  );
}
