export default function NewsInfo({
  categories,
  date,
  title,
  description,
  descriptionWidth,
  profileAuthor,
  nameAuthor,
  profesionAuthor,
}) {
  return (
    <>
      <div className="flex space-x-3 text-sm text-white/60 mt-1.5">
        <div className="uppercase">{categories}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2 className="text-2xl mt-3 leading-relaxed">
        <a href="#" className="hover:underline">
          {title}
        </a>
      </h2>
      <p
        className={`${
          descriptionWidth ? descriptionWidth : "w-full"
        } text-white/60 mt-2.5 leading-loose`}
      >
        {description}
      </p>
      <div className="flex items-center mt-5">
        <img src={profileAuthor} className="w-12" alt="" />
        <div className="ml-4">
          <h3>{nameAuthor}</h3>
          <p className="text-white/60 text-sm">{profesionAuthor}</p>
        </div>
      </div>
    </>
  );
}
