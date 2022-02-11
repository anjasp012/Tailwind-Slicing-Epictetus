import NewsAuthor from "./NewsAuthor";
import NewsTitle from "./NewsTitle";

export default function NewsInfo({
  categories,
  date,
  title,
  href,
  description,
  descriptionWidth,
  profileAuthor,
  nameAuthor,
  profesionAuthor,
}) {
  return (
    <>
      <NewsTitle
        categories={categories}
        date={date}
        title={title}
        href={href}
      />
      <p
        className={`${
          descriptionWidth ? descriptionWidth : "w-full"
        } text-white/60 mt-2.5 leading-loose`}
      >
        {description}
      </p>
      <NewsAuthor
        profileAuthor={profileAuthor}
        nameAuthor={nameAuthor}
        profesionAuthor={profesionAuthor}
      />
    </>
  );
}
