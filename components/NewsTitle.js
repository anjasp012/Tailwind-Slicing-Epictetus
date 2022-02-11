import Link from "next/link";

export default function NewsTitle({ categories, date, title, center, href }) {
  return (
    <>
      <div className="flex space-x-3 text-sm text-white/60">
        <div className="uppercase">
          <a href="#" className="hover:underline">
            {categories}
          </a>
        </div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2
        className={`text-2xl mt-3 leading-relaxed ${
          center ? "text-center mb-1" : ""
        }`}
      >
        {center ? (
          <>{title}</>
        ) : (
          <Link href={href}>
            <a className="hover:underline">{title}</a>
          </Link>
        )}
      </h2>
    </>
  );
}
